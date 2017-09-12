
const defaultDictionaty = require("./dict")
const removeAccents = require("remove-accents")


module.exports = provideDict => {

  return (term, { only = false } = {}) => {

    const dict = provideDict || defaultDictionaty

    let removed = false

    if (only)
      if (!dict.find(role => role[0].toLowerCase() === only))
        throw new Error(`invalid role selected "${only}"`)

    for (const majorRole of dict) {
  
      const [ roleName, minWordSize, withSuffix, suffixes, ...subRoles ] = majorRole
      
      if (minWordSize && term.length < minWordSize)
        continue

      if (only && only !== roleName.toLowerCase())
        continue

      if ([ "verb", "vowel" ].find(nm => roleName.toLowerCase() === nm) && removed)
        continue

      if (suffixes.length === 0 || suffixes.find(suffix => term.endsWith(suffix))) {
        for (const role of subRoles) {
          const [ suffix, stemSize, replace = "", exceptions = [] ] = role

          // leave when terms is a execption
          if (withSuffix) {
            if (exceptions.find(exception => term.endsWith(exception)))
              continue
          } else {
            if (exceptions.indexOf(term) !== -1)
              continue
          }
          // leave when stem size is insuficient
          if ((term.length - suffix.length) < stemSize)
            continue

          // remove suffix
          if (term.endsWith(suffix)) {
            removed = true
            term = term.replace(new RegExp(`${suffix}$`), replace)
            break
          }
        }
      }
    }

    return only ? term : removeAccents(term)
  }
}


const rslp = require("./index")()


const phrases = [
  "o rato roeu a roupa do rei do roma",
].forEach(phrase => {
  console.log(phrase.split(" ").map(w => rslp(w)).join(" "))
})

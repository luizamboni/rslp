

const { expect } = require("chai")

const RslpFactory = require("../index") 

const verbs = [
  [ "cantaríamo" , "cant" ],
  [ "cantássemo" , "cant" ],
  [ "beberíamo" , "beb" ],
  [ "bebêssemo" , "beb" ],
  [ "partiríamo" , "part" ],
  [ "partíssemo" , "part" ],
  [ "cantáramo" , "cant" ],
  [ "cantárei" , "cant" ],
  [ "cantaremo" , "cant" ],
  [ "cantariam" , "cant" ],
  [ "cantaríei" , "cant" ],
  [ "cantássei" , "cant" ],
  [ "cantassem" , "cant" ],
  [ "cantávamo" , "cant" ],
  [ "bebêramo" , "beb" ],
  [ "beberemo" , "beb" ],
  [ "beberiam" , "beb" ],
  [ "beberíei" , "beb" ],
  [ "bebêssei" , "beb" ],
  [ "bebessem" , "beb" ],
  [ "partiríamo" , "part" ],
  [ "partiremo" , "part" ],
  [ "partiriam" , "part" ],
  [ "partiríei" , "part" ],
  [ "partíssei" , "part" ],
  [ "partissem" , "part" ],
  [ "cantando" , "cant" ],
  [ "bebendo" , "beb" ],
  [ "partindo" , "part" ],
  [ "propondo" , "prop" ],
  [ "cantaram" , "cant" ],
  [ "cantarde" , "cant" ],
  [ "cantarei" , "cant" ],
  [ "cantarem" , "cant" ],
  [ "cantaria" , "cant" ],
  [ "cantarmo" , "cant" ],
  [ "cantasse" , "cant" ],
  [ "cantaste" , "cant" ],
  [ "cantavam" , "cant" ],
  [ "cantávei" , "cant" ],
  [ "beberam" , "beb" ],
  [ "beberde" , "beb" ],
  [ "beberei" , "beb" ],
  [ "bebêrei" , "beb" ],
  [ "beberem" , "beb" ],
  [ "beberia" , "beb" ],
  [ "bebermo" , "beb" ],
  [ "bebesse" , "beb" ],
  [ "bebeste" , "beb" ],
  [ "bebíamo" , "beb" ],
  [ "partiram" , "part" ],
  [ "concluíram" , "conclu" ],
  [ "partirde" , "part" ],
  [ "partírei" , "part" ],
  [ "partirem" , "part" ],
  [ "partiria" , "part" ],
  [ "partirmo" , "part" ],
  [ "partisse" , "part" ],
  [ "partiste" , "part" ],
  [ "cantamo" , "cant" ],
  [ "cantara" , "cant" ],
  [ "cantará" , "cant" ],
  [ "cantare" , "cant" ],
  [ "cantava" , "cant" ],
  [ "cantemo" , "cant" ],
  [ "bebera" , "beb" ],
  [ "beberá" , "beb" ],
  [ "bebere" , "beb" ],
  [ "bebiam" , "beb" ],
  [ "bebíei" , "beb" ],
  [ "partimo" , "part" ],
  [ "partira" , "part" ],
  [ "partirá" , "part" ],
  [ "partire" , "part" ],
  [ "compomo" , "comp" ],
  [ "cantai" , "cant" ],
  [ "cantam" , "cant" ],
  [ "barbear" , "barb" ],
  [ "cantar" , "cant" ],
  [ "cheguei" , "cheg" ],
  [ "cantei" , "cant" ],
  [ "cantem" , "cant" ],
  [ "beber" , "beb" ],
  [ "bebeu" , "beb" ],
  [ "bebia" , "beb" ],
  [ "partir" , "part" ],
  [ "partiu" , "part" ],
  [ "chegou" , "cheg" ],
  [ "bebi" , "beb" ],
]

const noun = [
  [ "existencialista" , "exist" ],
  [ "minimalista" , "minim" ],
  [ "contagem" , "cont" ],
  [ "gerenciamento" , "gerenc" ],
  [ "monitoramento" , "monitor" ],
  [ "nascimento" , "nasc" ],
  [ "comercializado" , "comerci" ],
  [ "traumatizado" , "traum" ],
  [ "alfabetizado" , "alfabet" ],
  [ "associativo" , "associ" ],
  [ "contraceptivo" , "contracep" ],
  [ "esportivo" , "esport" ],
  [ "abalado" , "abal" ],
  [ "impedido" , "imped" ],
  [ "ralador" , "ral" ],
  [ "entendedor" , "entend" ],
  [ "cumpridor" , "cumpr" ],
  [ "comparabilidade" , "compar" ],
  [ "abolicionista" , "abol" ],
  [ "intervencionista" , "interven" ],
  [ "profissional" , "profiss" ],
  [ "referência" , "refer" ],
  [ "repugnância" , "repugn" ],
  [ "abatedouro" , "abat" ],
  [ "fofoqueiro" , "fofoc" ],
  [ "brasileiro" , "brasil" ],
  [ "gostoso" , "gost" ],
  [ "comercializaç" , "comerci" ],
  [ "alegaç" , "aleg" ],
  [ "aboliç" , "abol" ],
  [ "anedotário" , "anedot" ],
  [ "ministério" , "minist" ],
  [ "chinês" , "chin" ],
  [ "beleza" , "bel" ],
  [ "rigidez" , "rigid" ],
  [ "parentesco" , "parent" ],
  [ "ocupante" , "ocup" ],
  [ "bombástico" , "bomb" ],
  [ "polêmico" , "polêm" ],
  [ "produtividade" , "produt" ],
  [ "profundidade" , "profund" ],
  [ "aposentadoria" , "aposentad" ],
  [ "existencial" , "exist" ],
  [ "artista" , "art" ],
  [ "maluquice" , "maluc" ],
  [ "chatice" , "chat" ],
  [ "demoníaco" , "demon" ],
  [ "decorrente" , "decorr" ],
  [ "criminal" , "crim" ],
  [ "americano" , "americ" ],
  [ "amável" , "am" ],
  [ "combustível" , "combust" ],
  [ "cobertura" , "cobert" ],
  [ "consensual" , "consens" ],
  [ "mundial" , "mund" ],
  [ "experimental" , "experimen" ],
]


const plural = [
  [ "bons" , "bom" ],
  [ "balões" , "balão" ],
  [ "capitães" , "capitão" ],
  [ "normais" , "normal" ],
  [ "papéis"  , "papel" ],
  [ "amáveis" , "amável" ],
  [ "lençóis" , "lençol" ],
  [ "barris"  , "barril" ],
  [ "males"  , "mal" ],
  [ "mares"  , "mar" ],
  [ "casas" , "casa" ],
]

const feminine = [
  [ "chefona", "chefão" ],
  [ "professora", "professor" ],
  [ "americana" , "americano" ],
  [ "chilena" , "chileno" ],
  [ "sozinha", "sozinho" ],
  [ "inglesa", "inglês" ],
  [ "famosa", "famoso" ],
  [ "maníaca" , "maníaco" ],
  [ "pritica", "pritico" ],
  [ "mantida" , "mantido" ],
  [ "cansada" , "cansado" ],
  [ "prima", "primo" ],
  [ "passiva" ,"passivo" ],
  [ "primeira", "primeiro" ],
]

const adverb = [
  ["felizmente", "feliz"]
]

const augmentative = [

  [ "cansadíssimo" , "cansad" ],
  [ "amabilíssimo" , "ama" ],
  [ "fortíssimo" , "fort" ],
  [ "chiquérrimo"  , "chiqu" ],
  [ "pezinho"  , "pe" ],
  [ "maluquinho"  , "maluc" ],
  [ "amiguinho" , "amig" ],
  [ "cansadinho" , "cansad" ],
  [ "carrinho" , "carr" ],
  [ "grandalhão" , "grand" ],
  [ "dentuça", "dent" ],
  [ "ricaço", "ric" ],
  [ "casadão", "cans" ],
  [ "corpázio", "corp" ],
  [ "pratarraz", "prat" ],
  [ "bocarra", "boc" ],
  [ "calorzão", "calor" ],
  [ "meninão", "menin" ],
]

const voew = [
  [ "menina", "menin" ],
  [ "grande", "grand" ],
  [ "menino", "menin" ],
]

describe("Rslp", () => {

  describe("with a defalt dictionary", () => {
    const rslp = RslpFactory()

    context("plural reduction", () => {
      plural.forEach(entry => {
        
        const [ original, expected ] = entry
        
        it(`${original} => ${expected}`, () => {
          expect(rslp(original, { only: "plural" })).to.be.equal(expected)
        })
      })
    })

    context("feminine reduction", () => {
      feminine.forEach(entry => {
        
        const [ original, expected ] = entry
        
        it(`${original} => ${expected}`, () => {
          expect(rslp(original, { only: "feminine"})).to.be.equal(expected)
        })
      })
    })

    context("augmentative reduction", () => {
      augmentative.forEach(entry => {
        
        const [ original, expected ] = entry
        
        it(`${original} => ${expected}`, () => {
          expect(rslp(original, { only: "augmentative" })).to.be.equal(expected)
        })
      })
    })

    context("vowel reduction", () => {
      voew.forEach(entry => {
        
        const [ original, expected ] = entry
        
        it(`${original} => ${expected}`, () => {
          expect(rslp(original, { only: "vowel" })).to.be.equal(expected)
        })
      })
    })

    context("adverb reduction", () => {
      adverb.forEach(entry => {
        
        const [ original, expected ] = entry
        
        it(`${original} => ${expected}`, () => {
          expect(rslp(original, { only: "adverb" })).to.be.equal(expected)
        })
      })
    })

    context("noun reduction", () => {
      noun.forEach(entry => {
        
        const [ original, expected ] = entry
        
        it(`${original} => ${expected}`, () => {
          expect(rslp(original, { only: "noun" })).to.be.equal(expected)
        })
      })
    })

    context("verb reduction", () => {
      verbs.forEach(entry => {
        
        const [ original, expected ] = entry
        
        it(`${original} => ${expected}`, () => {
          expect(rslp(original, { only: "verb" })).to.be.equal(expected)
        })
      })
    })
  })
})
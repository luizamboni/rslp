rslp.js
====

Install
```shell
 $ npm install rslp
```


use
```javascript
const phrases = [
  "o rato roeu a roupa do rei do roma",
].forEach(phrase => {
  console.log(phrase.split(" ").map(w => rslp(w)).join(" "))
})
// o rat roeu a roup do rei do rom
```
import { textTwo } from "./two.js";
console.log("app.js");
const textOne = "Nadpisana wartość textOne";
console.log(textOne, textTwo);
{
  const textOne = "textOne w scope blokowym";
  console.log("Blok:", textOne);
  console.log(value);
  const nestedText = "Zagnieżdżony tekst";
  console.log(nestedText);
}

function logText() {
  const textOne = "tekst w funkcji";
  console.log("Text w funkcji:", textOne);
  var city = "Kraków";
  console.log(city);
}

logText();

// console.log(city);

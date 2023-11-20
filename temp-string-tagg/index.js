// console.log`Nazywam się ${myName} i mam ${age} lat`; - to tak można? Ano można :-)

const myName = "Kacper";
const age = 31;

// const greet = "Nazywam się " + myName + " i mam" + age + 'lat.' ,

// const greet = `Nazywam się ${myName} i mam ${age} lat.`; - ${coś} to placeholder. Można w nim robić obliczenia. - patrz niżej

const greet = `Nazywam się ${myName} i mam ${age * 2} lat.`;

console.clear();
console.log(greet);
// console.log("----------------------------------------");
// const BACK_END_URL = "https://backend.jzp.pl";
// const usersURL = `${BACK_END_URL}/users`;
// console.log(usersURL);

// Kolejna część

//   Lorem ipsum dolor sit amet,
//   consectetur adipisicing elit. Est quo,
//   nostrum rerum explicabo omnis minus maiores,
//   nisi aperiam vero quam exercitationem, sint sunt.
//   Iste ex totam temporibus, voluptates iusto blanditiis.`;

//   I kolejna

console.log`Nazywam się ${myName} i mam ${age} lat`;

// i chyba ostatnia
function logDate(strings, currentDate) {
  const dayNumber = currentDate.getDay();
  const days = [
    "niedziela",
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota",
    "niedziela",
  ];
  return `${strings[0]}${days[dayNumber]}${strings[1]}`;
}

const date = new Date();
const day = logDate`Dzisiaj jest ${date}. Miłego dnia!`;
console.log(day);

// I na końcowy koniec w tej lekcji - przykład z React
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

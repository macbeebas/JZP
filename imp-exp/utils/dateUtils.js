export function calculateAge(birthday) {
  const now = new Date();
  return now.getFullYear() - birthday.getFullYear();
}

export function daysToDeparture(date) {
  const now = new Date();
  return Math.ceil((date.getTime() - now.getTime()) / (1000 * 3600 * 24));
}

// const dateFunctions = {calculateAge, daysToDeparture};
// export default dateFunctions;
// albo
// export default { calculateAge, daysToDeparture };

// function calculateAge(birthday) {
//     const now = new Date();
//     return now.getFullYear() - birthday.getFullYear();
// }

// function daysToDeparture(date) {
//     const now = new Date();
//     return Math.ceil((date.getTime() - now.getTime())/(1000 * 3600 * 24));
// }

// export {calculateAge, daysToDeparture}

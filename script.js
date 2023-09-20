const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
/ Create a copy of the players array using Array.from()
const team1 = Array.from(players);

// Create a copy of the person object using Object.assign()
const cap1 = Object.assign({}, person);

// Test if changes to players or person affect team1 or cap1
players.push("Sarah");
person.name = "Jane Smith";

console.log(team1); // It's a copy, so it won't include "Sarah"
console.log(cap1);  // It's a copy, so it won't reflect the name change
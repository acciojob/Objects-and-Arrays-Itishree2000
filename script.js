const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};
// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
// Create a reference to the array players with the variable team
const team = players;

// Create a copy of the array players using the spread operator with the variable team1
const team1 = [...players];

// Create a copy of the object person using the spread operator with the variable cap1
const cap1 = { ...person };

// Test if changes to players or person affect team, team1, or cap1
players.push("Sarah");
person.name = "Jane Smith";

console.log(team);  // It's a reference, so it will include "Sarah"
console.log(team1); // It's a copy, so it won't include "Sarah"
console.log(cap1);  // It's a copy, so it won't reflect the name change

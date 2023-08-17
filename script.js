const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
// Create a reference to the players array
const team = players;

// Create a copy of the players array
const team1 = [...players];

// Create a copy of the person object
const cap1 = { ...person };

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;

// You can test the modifications
team.push("Mike");  // This will also modify the original players array since team is a reference

team1.push("Jane"); // This will not modify the original players array

cap1.name = "Jane Smith"; // This will not modify the original person object

console.log(team);
console.log(team1);
console.log(cap1);







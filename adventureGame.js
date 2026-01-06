const readline = require("readline-sync");

//Get player name using readline-sync
let playerName = "";
let playerHealth = 100;
let playerGold = 20;
let currentLocation = 'village';
let gameRunning = true;
let inventory = [];

//Create variables for player stats

/*
Adventure Game
This game will be a text-based game where the player will be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change
based on their decisions.
*/

// Display the game title
console.log("Welcome to the Adventure Game");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");

playerName = readline.question("What is your name, brave adventure?");
console.log("Welcome " + playerName + "to the game!");
console.log("You started with " + playerGold + "gold!");

// Display welcome message and starting stats
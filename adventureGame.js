// ===========================================
// The Dragon's Quest - Text Adventure Game
// A progression-based learning project
// ===========================================

// Include readline for player input
const readline = require('readline-sync');

// Game state variables
let playerName = "";
let playerHealth = 100;
let playerGold = 20;  // Starting gold
let inventory = [];

// Weapon damage (starts at 0 until player buys a sword)
let weaponDamage = 0;      // Will increase to 10 when player gets a sword
console.log("Starting weapon damage: " + weaponDamage);
console.log("When you buy a sword, weapon damage will increase to 10!");

// Monster defense (affects combat outcomes)
let monsterDefense = 5;    // Monster's defense value
console.log("Monster defense: " + monsterDefense);
console.log("Monsters can withstand some damage in combat!");

// Healing potion restoration (matches final implementation)
let healingPotionValue = 30;  // How much health is restored
console.log("Healing potion value: " + healingPotionValue);
console.log("A potion will restore 30 health!");

console.log("=================================");
console.log("       The Dragon's Quest        ");
console.log("=================================");
console.log("\nYour quest: Defeat the dragon in the mountains!");

// Get player's name
playerName = readline.question("\nWhat is your name, brave adventurer? ");
console.log("\nWelcome, " + playerName + "!");
console.log("You start with " + playerGold + " gold.");

// =================================
// START LAB: Story Choices
// =================================
// Location tracking
let currentLocation = "village";
let firstVisit = true;

console.log("Starting location: " + currentLocation);
console.log("First time playing: " + firstVisit);

if(currentLocation === "village") {
    console.log("\n=== VILLAGE ===");
    console.log("You're in a bustling village. The blacksmith and market are nearby.");
    console.log("\nWhere would you like to go?");
    console.log("1: Go to blacksmith");
    console.log("2: Go to market");
    console.log("3: Enter forest");
    console.log("4: Check status");
    console.log("5: Quit game");
    if (firstVisit) {
        console.log("\nVillager: 'Welcome, adventure! Rumor has it there's a dragon in the mountains...'");
        firstVisit = false;
    }
} else if (currentLocation === "blacksmith") {
    console.log("\n === BLACKSMITH ===");
    console.log("1: Back to the Village");
    console.log("2: Check status");
    console.log("3: Quit game");
};

// Get player's choice
let playersChoice = readline.question("\nWhat is your choice (number): ");
let choiceNumber = Number(parseInt(playersChoice)); 

if( currentLocation === "village") {
    if (choiceNumber === 1) {
        currentLocation = "blacksmith";
        console.log("/nYou enter the blachsmith's shop");
    } else if (choiceNumber === 2) {
        console.log("\nYou enter the market");
    } else if (choiceNumber === 3) {
        console.log("\nYou enter the forest");
    } else if (choiceNumber === 4) {
        console.log("/n " + playerName + "'s status");
        console.log("Gold: " + playerGold);
        console.log("Health: " + playerHealth);
        console.log("Location: " + currentLocation);
    } else if (choiceNumber === 5) {
        console.log("\nGoodbye, adventure!");
    } else {
        console.log("\nInvalid choice! Please enter the number between 1 and 5");
    }
} else if (currentLocation === "blacksmith") {
    if (choiceNumber === 1) {
        currentLocation = "village";
        console.log("\nYou return to the village center");
    } else if (choiceNumber === 2) {
        console.log("\n " + playerName + "'s status");
        console.log("Gold: " + playerGold);
        console.log("Health: " + playerHealth);
        console.log("Location: " + currentLocation);
    } else if ( choiceNumber === 3) {
        console.log("\nGoodbye, adventure!");
    } else {
        console.log("\nInvalid choice! Please enter the number between 1 and 3")
    }
}

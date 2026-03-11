// ===========================================
// The Dragon's Quest - Text Adventure Game
// A progression-based learning project
// ===========================================

// Include readline for player input
const readline = require('readline-sync');

// Game state variables
let gameRunning = true;
let playerName = "";
let currentLocation = "";
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

// Location tracking
currentLocation = readline.question("\nWhere would you like to go: Village or Blacksmith?");
let firstVisit = true;

// Location check and display
if (currentLocation === "village") {
    console.log("\n=== VILLAGE ===");
    console.log("You're in a bustling village. The blacksmith and market are nearby.");
    console.log("\nWhere would you like to go?");
    console.log("1: Go to blacksmith");
    console.log("2: Go to market");
    console.log("3: Enter forest");
    console.log("4: Check status");
    console.log("5: Quit game");
    
    if (firstVisit) {
        console.log("\nVillager: 'Welcome, adventurer! Rumor has it there's a dragon in the mountains...'");
        firstVisit = false;
    }
}
else if (currentLocation === "blacksmith") {
    console.log("\n=== BLACKSMITH ===");
    console.log("The heat from the forge fills the air. Weapons and armor line the walls.");
    console.log("\nWhere would you like to go?");
    console.log("1: Return to village");
    console.log("2: Check status");
    console.log("3: Quit game");
}

// Get player choice
// player choice will be handled inside the game loop

// Choice handling
while (gameRunning) {
    // ask for choice each round
    let choice = readline.question("\nEnter choice (number): ");
    let choiceNum = parseInt(choice);

if (currentLocation === "village") {
    if (choiceNum === 1) {
        currentLocation = "blacksmith";
        console.log("\nYou enter the blacksmith's shop.");
        // continue looping

    }
    else if (choiceNum === 2) {
        console.log("\nMerchants call out their wares.");
        // continue looping

    }
    else if (choiceNum === 3) {
        console.log("\nA dark path leads into the forest. Strange noises echo from within.");
        // continue looping

    }
    else if (choiceNum === 4) {
        // Show status
        console.log("\n=== " + playerName + "'s Status ===");
        console.log("❤️  Health: " + playerHealth);
        console.log("💰 Gold: " + playerGold);
        console.log("📍 Location: " + currentLocation);
    }
    else if (choiceNum === 5) {
        console.log("\nGoodbye, brave adventurer!");
        gameRunning = false; // quit after message
    }
    else {
        console.log("\nInvalid choice! Please enter a number between 1 and 5.");
        // ignore and repeat
    }
}
else if (currentLocation === "blacksmith") {
    if (choiceNum === 1) {
        currentLocation = "village";
        console.log("\nYou return to the village center.");
    }
    else if (choiceNum === 2) {
        // Show status
        console.log("\n=== " + playerName + "'s Status ===");
        console.log("❤️  Health: " + playerHealth);
        console.log("💰 Gold: " + playerGold);
        console.log("📍 Location: " + currentLocation);
    }
    else if (choiceNum === 3) {
        console.log("\nGoodbye, brave adventurer!");
        gameRunning = false // quit from loop
    }
    else {
        console.log("\nInvalid choice! Please enter a number between 1 and 3.");
    }
} else if (playerHealth === 0) {
    console.log("\nGame Over");
    gameRunning = false; // end game loop
}
}
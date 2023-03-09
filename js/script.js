var gameState = {
    attempts: 20,
    gold: 0,
    events: ["cave", "house", "gold mine", "casino"]
}

var totalAssets = {
    gained: 0,
    lost: 0
}

$("#cave").click(cave);

function cave() {
    gameState.attempts--;
    $("#attempts").html(gameState.attempts);

    gameState.gold += 5;
    $("#gold").html(gameState.gold);

    $("#log").html("You earned 5 gold coins!");
    console.log("You have earned 5 coins!");

    gameOver();
}

$("#house").click(house);

function house() {
    gameState.attempts--;
    $("#attempts").html(gameState.attempts);

    if (Math.random() <= 0.8) {
        gameState.gold += 10;
        $("#log").html("You earned 10 gold coins!");
        console.log("You earned 10 coins!");
    } else {
        gameState.gold += 0;
        $("#log").html("You earned 0 gold coins!");
        console.log("You earned 0 coins!");
    }

    $("#gold").html(gameState.gold);

    gameOver();
}

$("#goldMine").click(goldMine);

function goldMineRandomizer(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var goldMineNumber = goldMineRandomizer(1, 25);

function goldMine() {
    gameState.attempts--;
    $("#attempts").html(gameState.attempts);

    if (Math.random() <= 0.8) {
        gameState.gold += goldMineNumber;
        $("#gold").html(gameState.gold);
        $("#log").html("You earned " + gameState.gold + " coins");
        console.log("You have earned %d coins!", gameState.gold);
    } else {
        gameState.gold += 0;
        $("#log").html("You earned 0 gold coins!");
        console.log("You earned 0 coins!");
    }

    gameOver();
}

$("#casino").click(casino);

function casino() {
    gameState.attempts--;
    $("#attempts").html(gameState.attempts);

    if (Math.random() <= 0.5) {
        gameState.gold += Math.floor(Math.random() * (50 - 40) + 40);
        $("#log").html("You earned " + gameState.gold + " coins");
        console.log("You earned %d coins!", gameState.gold);
        $("#gold").html(gameState.gold);
    } else {
        gameState.gold += Math.floor(Math.random() * (50 - 40) + 40);
        $("#log").html("You lost " + gameState.gold + " coins");
        console.log("You lost %d coins!", gameState.gold);
        $("#gold").html(gameState.gold);
    }

    gameOver();
}

$("#reset").click(reset);

function reset() {
    location.reload();
}

function gameOver() {
    if (gameState.gold >= 250) {
        alert("You Win!");
        location.reload();
    }
    else if (gameState.attempts <= 0 && gameState.gold < 250) {
        alert("You Lose!");
        location.reload();
    } else if (gameState.attempts <= 0 && gameState.gold >= 250) {
        alert("You Win!");
        location.reload();
    }
}
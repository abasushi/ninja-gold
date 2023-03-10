var gameState = {
    attempts: 20,
    gold: 0,
    log: []
}

var totalGold = {
    gained: 0,
    lost: 0
}

let randomizer = 0;

//Cave Function (100% chance. 5 Gold.)
$("#cave").click(cave);

function cave() {
    //-1 Attempt
    gameState.attempts--;
    $("#attempts").html(gameState.attempts);

    //Adds 5 gold to total earnings
    totalGold.gained += 5;
    $("#gained").html(totalGold.gained);

    //Adds 5 Gold to overall gold
    gameState.gold += 5;
    $("#gold").html(gameState.gold);

    //Logs the Action
    new Date();
    let t = new Date().toLocaleTimeString();

    $(document).ready(function () {
        var logHistory = { "dt": new Date(), "nextline": "<br>", "gold": "You have earned 5 gold", "place": "<br>Location: Cave<br><br>" };
        $.each(logHistory, function (key, value) {
            $("#log-gains").append(value + ' ');
            $("#log-gains").css('color', 'green');
        });
    });

    console.log("%cYou have earned 5 gold!", 'color: green');

    gameOver();
}

//House Function (80% chance. 10 Gold.)
$("#house").click(house);

function house() {
    //-1 Attempt
    gameState.attempts--;
    $("#attempts").html(gameState.attempts);

    //Probability of getting gold
    randomizer = Math.floor(Math.random() * 100);
    houseProbability = 80;

    if (randomizer <= houseProbability) {
        //Adds 10 gold to overall gold
        gameState.gold += 10;
        $("#gold").html(gameState.gold);

        //Adds 10 gold total earnings
        totalGold.gained += 10;
        $("#gained").html(totalGold.gained);

        //Logs the Action
        new Date();
        let t = new Date().toLocaleTimeString();

        $(document).ready(function () {
            var logHistory = { "dt": new Date(), "nextline": "<br>", "gold": "You have earned 10 gold", "place": "<br>Location: House<br><br>" };
            $.each(logHistory, function (key, value) {
                $("#log-gains").append(value + ' ');
                $("#log-gains").css('color', 'green');
            });
        });

        console.log("%cYou have earned 10 gold!", 'color: green');
    } else {
        //Adds 0 gold to overall gold
        gameState.gold += 0;
        $("#gold").html(gameState.gold);

        //Logs the Action
        new Date();
        let t = new Date().toLocaleTimeString();

        $(document).ready(function () {
            var logHistory = { "dt": new Date(), "nextline": "<br>", "gold": "You have earned 0 gold", "place": "<br>Location: House<br><br>" };
            $.each(logHistory, function (key, value) {
                $("#log-zero").append(value + ' ');
                $("#log-zero").css('color', 'black');
            });
        });

        console.log("You have earned 0 gold!");
    }

    gameOver();
}

//Gold Mine Function (80% chance. Between 1 to 25 Gold.)
$("#goldMine").click(goldMine);

let randomMineGold = 0;

function goldMine() {
    //-1 Attempt
    gameState.attempts--;
    $("#attempts").html(gameState.attempts);

    //Probability of getting gold
    randomizer = Math.floor(Math.random() * 100);
    mineProbability = 80;

    new Date();
    let t = new Date().toLocaleTimeString();

    if (randomizer <= mineProbability) {
        //Generates between 1 to 25 gold
        randomMineGold = Math.floor(Math.random() * (25 - 1) + 1);

        //Adds randomzied gold to overall gold
        gameState.gold += randomMineGold;
        $("#gold").html(gameState.gold);

        //Adds randomized gold to total earnings
        totalGold.gained += randomMineGold;
        $("#gained").html(totalGold.gained);

        //Logs the action
        $(document).ready(function () {
            var logHistory = { "dt": new Date(), "prompt1": "<br>You have earned ", "Gold": randomMineGold, "prompt2": " gold!", "place": "<br>Location: Gold Mine<br><br>" };
            $.each(logHistory, function (key, value) {
                $("#log-gains").append(value);
                $("#log-gains").css('color', 'green');
            });
        });

        console.log("%cYou have earned %d coins!", 'color: green', randomMineGold);
    } else {
        gameState.gold += 0;

        $(document).ready(function () {
            var logHistory = { "dt": new Date(), "nextline": "<br>", "gold": "You have earned 0 gold", "place": "<br>Location: Gold Mine<br><br>" };
            $.each(logHistory, function (key, value) {
                $("#log-zero").append(value + ' ');
            });
        });

        console.log("You have earned 0 gold!");
    }
    gameOver();
}

//Casino Function (50% chance. Gain or Lose Between 40 to 50 Gold.)
$("#casino").click(casino);

function casino() {
    //-1 Attempt
    gameState.attempts--;
    $("#attempts").html(gameState.attempts);

    //Probability of getting/losing gold
    randomizer = Math.floor(Math.random() * 100);
    casinoProbability = 50;

    if (randomizer <= casinoProbability) {
        //Generates between 40 to 50 gold
        randomCasinoGold = Math.floor(Math.random() * (50 - 40) + 40);

        //Adds randomzied gold to overall gold
        gameState.gold += randomCasinoGold;
        $("#gold").html(gameState.gold);

        //Adds randomized gold to total earnings
        totalGold.gained += randomCasinoGold;
        $("#gained").html(totalGold.gained);

        //Logs the action
        $(document).ready(function () {
            var logHistory = { "dt": new Date(), "prompt1": "<br>You have earned ", "Gold": randomCasinoGold, "prompt2": " gold!", "place": "<br>Location: Casino<br><br>" };
            $.each(logHistory, function (key, value) {
                $("#log-gains").append(value);
                $("#log-gains").css('color', 'green');
            });
        });

        console.log("%cYou have earned %d coins!", 'color: green', randomCasinoGold);
    } else {
        //Generates between 40 to 50 gold
        randomCasinoGold = Math.floor(Math.random() * (50 - 40) + 40);

        //Deducts randomzied gold to overall gold
        gameState.gold -= randomCasinoGold;
        $("#gold").html(gameState.gold);

        //Adds the randomized gold to total losses
        totalGold.lost += randomCasinoGold;
        $("#lost").html(totalGold.lost);

        //Logs the action
        $(document).ready(function () {
            var logHistory = { "dt": new Date(), "prompt1": "<br>You have earned ", "Gold": randomCasinoGold, "prompt2": " gold!", "place": "<br>Location: Casino<br><br>" };
            $.each(logHistory, function (key, value) {
                $("#log-losses").append(value);
                $("#log-losses").css('color', 'red');
            });
        });

        console.log("%cYou have lost %d coins!", 'color: red', randomCasinoGold);
    }
    gameOver();
}

//Alerts the end of the Game
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

//Resets the game
$("#reset").click(reset);

function reset() {
    location.reload();
}

//Ninja animation to location
$("#cave").click(function () {
    $("#ninja").animate({
        marginLeft: '-320px',
        marginTop: '-100px'
    }, 800, function () {
        //resets the margins once the duration ends
        $(this).css({ marginLeft: 0, marginTop: 0 });
    });
});

$("#house").click(function () {
    $("#ninja").animate({
        marginLeft: '-320px',
        marginTop: '100px'
    }, 800, function () {
        //resets the margins once the duration ends
        $(this).css({ marginLeft: 0, marginTop: 0 });
    });
});

$("#casino").click(function () {
    $("#ninja").animate({
        marginLeft: '420px',
        marginTop: '100px'
    }, 800, function () {
        //resets the margins once the duration ends
        $(this).css({ marginLeft: 0, marginTop: 0 });
    });
});

$("#goldMine").click(function () {
    $("#ninja").animate({
        marginLeft: '420px',
        marginTop: '-100px'
    }, 800, function () {
        //resets the margins once the duration ends
        $(this).css({ marginLeft: 0, marginTop: 0 });
    });
});
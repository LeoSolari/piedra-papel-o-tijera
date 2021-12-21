function rpsGame (yourChoice) {
    console.log(yourChoice.id);
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(Math.floor(Math.random() * 3));
    results = decideWinner(humanChoice, botChoice); // (1, 0) human won, (0.5, 0.5) draw, (0,1 ) bot won
    console.log(results);
    message = finalMessage (results);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ["piedra", "papel", "tijeras"][number];
}

function decideWinner(yourChoice, computerChoice){
    let rpsDataBase = {
        "piedra": {
            "tijeras" : 1,
            "piedra" : 0.5,
            "papel" : 0
        },
        "papel" : {
            "piedra" : 1,
            "papel" : 0.5,
            "tijeras" : 0,
        },
        "tijeras" : {
            "papel" : 1,
            "tijeras" : 0.5,
            "piedra" : 0
        }
    }
    let yourScore = rpsDataBase[yourChoice][computerChoice];
    let computerScore = rpsDataBase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if (yourScore === 0) {
        return {"message" : "Perdiste!" ,"color": "red"};
    } else if (yourScore === 0.5) {
        return {"message" : "Empate!", "color": "yellow"};
    } else {
        return {"message" : "Ganaste!", "color" : "green"};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imagesDataBase = {
        "piedra" : document.getElementById("piedra").src,
        "papel" : document.getElementById("papel").src,
        "tijeras" : document.getElementById("tijeras").src
    }
    //remove images
    
    document.getElementById("piedra").remove();
    document.getElementById("papel").remove();
    document.getElementById("tijeras").remove();

    let humanDiv = document.createElement("div");
    let botDiv = document.createElement("div");
    let messageDiv = document.createElement("div");

    humanDiv.innerHTML = "<img src='" + imagesDataBase[humanImageChoice] + "'style='box-shadow: 0px 10px 50px rgba(55, 255, 55)'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage["color"] + ";font-size: 50px; padding: 20px;'>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imagesDataBase[botImageChoice] + "'style='box-shadow: 0px 10px 50px rgba(44,44,144)'>"
    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(messageDiv);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);
    
}
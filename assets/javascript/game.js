$(document).ready(function(){

var random=math.floor(math.random()*102+19)
$("#randomScore").text(random);

var num1=random.floor(math.random()*12+1);
var num2=random.floor(math.random()*12+1);
var num3=random.floor(math.random()*12+1);
var num4=random.floor(math.random()*12+1); 

//variables tracking playerTotal,wins and losses.

var playerTotal = 0;
var wins = 0;
var losses = 0;

$("#wins").text(wins);
$("#losses").text(losses);

//reset game.

function reset(){
    random=math.floor(math.random()*102+19);
    console.log(random)
    $("#randomScore").text(random);
    num1=random.floor(math.random()*12+1);
    num2=random.floor(math.random()*12+1);
    num3=random.floor(math.random()*12+1);
    num4=random.floor(math.random()*12+1);
    playerTotal=0;
    $("#totalScore").text(playerTotal); 
}

//Display Wins.

function winner(){
    wins++;
    $("#wins").text(wins);
    reset();
}

//Display loser.

function loser(){
    losses++;
    $("#losses").text(losses);
    reset();
}

//click crystals.
$("#img-image1").on("click",function(){
    playerTotal = playerTotal + num1;
    console.log("new playerTotal= "+playerTotal);
    $("#totalScore").text(playerTotal);
    if (playerTotal==random){
        winner();
    }
    else if (playerTotal > random){
        loser();
    }
})

$("#img-image2").on("click",function(){
    playerTotal = playerTotal + num2;
    console.log("new playerTotal= "+playerTotal);
    $("#totalScore").text(playerTotal);
    if (playerTotal==random){
        winner();
    }
    else if (playerTotal > random){
        loser();
    }
})
$("#img-image3").on("click",function(){
    playerTotal = playerTotal + num3;
    console.log("new playerTotal= "+playerTotal);
    $("#totalScore").text(playerTotal);
    if (playerTotal==random){
        winner();
    }
    else if (playerTotal > random){
        loser();
    }
})
$("#img-image4").on("click",function(){
    playerTotal = playerTotal + num4;
    console.log("new playerTotal= "+playerTotal);
    $("#totalScore").text(playerTotal);
    if (playerTotal==random){
        winner();
    }
    else if (playerTotal > random)4
        loser();
    })

})
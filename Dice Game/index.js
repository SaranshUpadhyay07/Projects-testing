var dice = Math.random();
dice = Math.floor((dice*6)+1);

if(dice >=0 && dice<=1){
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}
else if(dice >1 && dice<=2){
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}
else if(dice >2 && dice<=3){
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}
else if(dice >3 && dice<=4){
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}
else if(dice >4 && dice<=5){
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}

var dice2 = Math.random();
dice2 = Math.floor((dice2*6)+1);

if(dice2 >=0 && dice2<=1){
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}
else if(dice2 >1 && dice2<=2){
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}
else if(dice2 >2 && dice2<=3){
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}
else if(dice2 >3 && dice2<=4){
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}
else if(dice2 >4 && dice2<=5){
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}


if(dice > dice2){
    document.querySelector("h1").innerHTML="&#128681 Player 1 Wins!";
}
else if (dice < dice2){
    document.querySelector("h1").innerHTML="&#128681 Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="&#128681 Draw";
}

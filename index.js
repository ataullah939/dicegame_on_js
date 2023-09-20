//plyer 1
var i = document.getElementsByTagName("img")[0];
var x = Math.random() * 6;
x = Math.floor(x) + 1;

if (x === 1) {
  i.src = "./images/dice1.png";
} else if (x === 2) {
  i.src = "./images/dice2.png";
} else if (x === 3) {
  i.src = "./images/dice3.png";
} else if (x === 4) {
  i.src = "./images/dice4.png";
} else if (x === 5) {
  i.src = "./images/dice5.png";
} else if (x === 6) {
  i.src = "./images/dice6.png";
}

//plyer 2

var i2 = document.getElementsByTagName("img")[1];
var y = Math.random() * 6;
y = Math.floor(y) + 1;

if (y === 1) {
  i2.src = "./images/dice1.png";
} else if (y === 2) {
  i2.src = "./images/dice2.png";
} else if (y === 3) {
  i2.src = "./images/dice3.png";
} else if (y === 4) {
  i2.src = "./images/dice4.png";
} else if (y === 5) {
  i2.src = "./images/dice5.png";
} else if (y === 6) {
  i2.src = "./images/dice6.png";
}
//h1 value
document.getElementsByTagName("h1")[0].innerHTML = "Player 1 won";
if (x > y) {
  document.getElementsByTagName("h1")[0].innerHTML = "Player 1 won";
} else if (y > x) {
  document.getElementsByTagName("h1")[0].innerHTML = "Player 2 won";
} else if (x === y) {
  document.getElementsByTagName("h1")[0].innerHTML = "Draw try again";
}

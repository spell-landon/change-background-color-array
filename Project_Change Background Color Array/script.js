
var body = document.querySelector('body');

var button = document.getElementById('clickMe');
var colorsArray = ["#ff7d56", "#ffd56b", "#94fa50", "#53fcdd", "#6f80ff", "#b95eff", "#ff5dd9", "#ff3d40"];

function changeColor() {
    var randomHex = colorsArray[Math.floor(Math.random() * colorsArray.length)];
    document.body.style.backgroundColor = randomHex;
    
};
button.addEventListener('click', changeColor);
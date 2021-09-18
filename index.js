console.log("hello");

let lifeCounter = document.querySelector('.life-counter');
let lifeDown = document.querySelector('.life-down');
let lifeUp = document.querySelector('.life-up');


let count = 20;

updateDisplay();

lifeDown.addEventListener("click", ()=>{
    count--;
    updateDisplay();

});

lifeUp.addEventListener("click",()=>{
    count++;
    updateDisplay();

}) ;

function updateDisplay(){
    lifeCounter.innerHTML = count;
} ;


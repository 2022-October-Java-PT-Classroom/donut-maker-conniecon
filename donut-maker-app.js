import DonutMaker from "./donut-maker.js";

// VARIABLES
let donut = document.querySelector(".donut-clicker");
let autoClicker = document.querySelector(".auto-clicker");
let donutMultiplier = document.querySelector(".multiplier-clicker");
// let enableAutoClickBtn = document.querySelector(".enable-auto-clicker");
// let updateAutoClickerCost = document.querySelector("autoScore");
// let updateMultiClickerCost = document.querySelector("multiplierScore");
let autoCostText = document.querySelector(".auto-clicker-cost");
let multiCostText = document.querySelector(".multi-clicker-cost");
let updateDonutScore = document.querySelector("#donutScore");



// OBJECT
let donutMaker = new DonutMaker();

donutMaker.enableAutoClickerBtn();
donutMaker.enableMultiClickerBtn();

// DONUT CLICKER
donut.addEventListener("click", () => {
  donutMaker.addToDonutCount();
  // console.log(donutMaker.donutCount);
  donutMaker.enableAutoClickerBtn();
  donutMaker.enableMultiClickerBtn();
  document.getElementById("donutScore").innerHTML = donutMaker.donutCount;
});

// AUTO CLICKER
autoClicker.addEventListener("click", () => {
  donutMaker.addToAutoClickerCount();
  
  document.getElementById("autoScore").innerHTML = donutMaker.autoClickerCount;
  donutMaker.enableAutoClickerBtn();
  donutMaker.buyFirstAutoClicker();

  window.setInterval(() => {
    donutMaker.donutCount += 1;
    // donutMaker.donutCount += donutMaker.autoClickerCount * Math.pow(1.2, donutMaker.autoClickerCount);
    // donutMaker.getDonutCount();
    // console.log(donutMaker.donutCount)
  donutMaker.enableMultiClickerBtn();
  donutMaker.enableAutoClickerBtn();
  donutMaker.increaseMultiplierCountExponentially();
  donutMaker.increaseDonutCountWithDonutMultiplier();
  donutMaker.increaseCostOfDonutMultiplier(); 
  updateDonutScore.innerText = donutMaker.donutCount;
  },1000);
  
  

  donutMaker.enableAutoClickerBtn();
  donutMaker.enableMultiClickerBtn();
  
  // document.getElementById("autoScore").innerHTML = donutMaker.autoClickerCountCount;
  document.getElementById("donutScore").innerHTML = donutMaker.donutCount;

  autoCostText.innerText = donutMaker.autoClickerCost;

});

// DONUT MULTIPLIER
donutMultiplier.addEventListener("click", () => {
  donutMaker.buyDonutMultiplier();  // line 77
  donutMaker.addToDonutMultiplierCount();  // line 69
  document.getElementById("multiplierScore").innerHTML = donutMaker.donutMultiplierCount;
  document.getElementById("donutScore").innerHTML = donutMaker.donutCount;

  donutMaker.enableMultiClickerBtn();
  donutMaker.enableAutoClickerBtn();
  
  donutMaker.increaseMultiplierCountExponentially(); 
  donutMaker.increaseCostOfDonutMultiplier(); 
  donutMaker.increaseDonutCountWithDonutMultiplier();  
  console.log(donutMaker.donutMultiplierCost);

  document.getElementById("multiplierScore").innerHTML = donutMaker.donutMultiplierCount;
  document.getElementById("donutScore").innerHTML = donutMaker.donutCount;
  multiCostText.innerText = donutMaker.donutMultiplierCost;
});






import DonutMaker from "./donut-maker.js";

// VARIABLES
let donut = document.querySelector(".donut-clicker");
let autoClicker = document.querySelector(".auto-clicker");
let donutMultiplier = document.querySelector(".multiplier-clicker");

let autoCostText = document.querySelector(".auto-clicker-cost");
let multiCostText = document.querySelector(".multi-clicker-cost");
let updateDonutScore = document.querySelector("#donutScore");



// OBJECT
let donutMaker = new DonutMaker();

donutMaker.enableAutoClickerBtn();
donutMaker.enableMultiClickerBtn();
// window.setInterval(() => {
//     donutMaker.enableAutoClickerBtn();
//     donutMaker.enableMultiClickerBtn();
//   } , 1000)

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
  // UPDATES AUTO CLICKER COUNT
  donutMaker.addToAutoClickerCount();
  document.getElementById("autoScore").innerHTML = donutMaker.autoClickerCount;

  donutMaker.enableAutoClickerBtn();
  donutMaker.enableMultiClickerBtn();

  donutMaker.buyAdditionalAutoClicker();

  // window.setInterval(() => {
  //   donutMaker.donutCount + donutMaker.addToDonutCount;
  //   donutMaker.increaseCostOfAutoClicker();
  //   // donutMaker.getDonutCount();
  //   updateDonutScore.innerText = donutMaker.donutCount;
  //   // console.log(donutMaker.donutCount);
  // },1000);

  window.setInterval(() => {
    // donutMaker.donutCount += 1;
    donutMaker.donutCount += donutMaker.autoClickerCount * Math.round(Math.pow(1.2, donutMaker.autoClickerCount));
    // donutMaker.getDonutCount();
    
  // donutMaker.enableMultiClickerBtn();
  // donutMaker.enableAutoClickerBtn();
  // donutMaker.increaseMultiplierCountExponentially();
  // donutMaker.increaseDonutCountWithDonutMultiplier();
  // donutMaker.increaseCostOfDonutMultiplier(); 
  updateDonutScore.innerText = donutMaker.donutCount;
  },1000);
  

  // window.setInterval(() => {
  //   donutMaker.getDonutCount();
  //   updateDonutScore.innerText = donutMaker.donutCount;
    
  // }, 1000)
  
  // window.setInterval(() => {
  //   donutMaker.enableAutoClickerBtn();
  //   donutMaker.enableMultiClickerBtn();
  // } , 1000)

  donutMaker.enableAutoClickerBtn();
  donutMaker.enableMultiClickerBtn();

  // donutMaker.increaseMultiplierCountExponentially(); 
  // donutMaker.increaseCostOfDonutMultiplier();
  // donutMaker.increaseDonutCountWithDonutMultiplier();

  donutMaker.increaseCostOfAutoClicker();

  // donutMaker.increaseMultiplierCountExponentially(); 
  // donutMaker.increaseCostOfDonutMultiplier(); 
  // donutMaker.increaseDonutCountWithDonutMultiplier();
  

  document.getElementById("donutScore").innerHTML = donutMaker.donutCount;

  // document.getElementById("autoScore").innerHTML = donutMaker.autoClickerCost;
  autoCostText.innerText = donutMaker.autoClickerCost;
  donutMaker.enableAutoClickerBtn();
  donutMaker.enableMultiClickerBtn();

});

// DONUT MULTIPLIER
donutMultiplier.addEventListener("click", () => {
  donutMaker.buyDonutMultiplier();  
  donutMaker.addToDonutMultiplierCount();  
  document.getElementById("multiplierScore").innerHTML = donutMaker.donutMultiplierCount;
  document.getElementById("donutScore").innerHTML = donutMaker.donutCount;

  donutMaker.enableMultiClickerBtn();
  donutMaker.enableAutoClickerBtn();




  ////////////////////
  // donutMaker.increaseMultiplierCountExponentially(); 
  
  donutMaker.increaseCostOfDonutMultiplier(); 

  // donutMaker.increaseDonutCountWithDonutMultiplier();
  ///////////////////// 





  donutMaker.enableAutoClickerBtn();
  donutMaker.enableMultiClickerBtn(); 
  // console.log(donutMaker.donutMultiplierCost);

  document.getElementById("multiplierScore").innerHTML = donutMaker.donutMultiplierCount;
  document.getElementById("donutScore").innerHTML = donutMaker.donutCount;
  multiCostText.innerText = donutMaker.donutMultiplierCost;
});






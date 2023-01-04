class DonutMaker {
  constructor() {
    this.donutCount = 0;
    this.autoClickerCount = 0;
    this.autoClickerCost = 5;    // change to 100
    this.donutMultiplierCount = 0;
    this.donutMultiplierCost = 10;   // change to 10
  }

  // add to donutCount
  addToDonutCount(){
    this.donutCount++;
  }

  // retrieve donutCount
  getDonutCount() {
    return this.donutCount;
  }

  // add to autoClickerCount
  addToAutoClickerCount(){
    this.autoClickerCount++;
  }

  // retrieve autoClickerCount
  getAutoClickerCount(){
    return this.autoClickerCount;
  }

  // buy AutoClicker
  buyFirstAutoClicker(){
    this.donutCount -= 5;     // change to 100
  }

  // buy secondAutoClicker
  buySecondAutoClicker(){
    this.donutCount -= 11;
  }

  // buy additionalAutoClicker
  buyAdditionalAutoClicker() {
    this.donutCount += Math.round(this.autoClickerCost * 0.1);
  }

  // are there enough donuts to buy clicker
  checkDonutCountToBuyAutoClicker(){
    if(this.donutCount >= this.autoClickerCost * .1) {
      this.donutCount - this.autoClickerCost;
    }
  }


  // increase donut count when auto clicker is activated
  increaseDonutCountWhenAutoClickerIsActivated() {
    if(this.autoClickerCount > 0) {
      this.donutCount += Math.pow(1.2, this.autoClickerCount);
    }
    // for (let i = 0; i < this.autoClickerCount; i++){
    //   this.donutCount++;
    // }
  }

  // retrieve donut multiplier Count
  getDonutMultiplierCount() {
    return this.donutMultiplierCount;
  }

  // retrieve donut multiplier cost
  getDonutMultiplierCost() {
    return this.donutMultiplierCost;
  }

  // add to donut Multiplier
  addToDonutMultiplierCount() {
    this.donutMultiplierCount++;
  }




// subtract DonutMultiplier from DonutCount    //??????????????
  buyDonutMultiplier() {
    // if(this.donutCount == 0){
    //   this.donutCount += 0;
    // }
    this.donutCount -= 10;                 
  }




  // increase donut Multiplier cost
  increaseCostOfDonutMultiplier(){
    this.donutMultiplierCost = Math.round(this.donutMultiplierCost * 1.1);
  }

  // are there enough donuts to buy multiplier
  checkDonutCountToBuyDonutMultiplier(){
    if(this.donutCount >= this.donutMultiplierCost) {
      this.donutCount - this.donutMultiplierCost;
    }
  }

  // increase donut count by 1.2 with one donutMultiplier
  increaseDonutCountWithDonutMultiplier(){
    for (let i = 0; i < this.donutMultiplierCount; i++){
      this.donutCount += 1.2;
    }
  }

  // increase by 1.2x
  increaseMultiplierCountExponentially(){
    
      this.donutCount += Math.round(this.autoClickerCount * Math.pow(1.2, this.donutMultiplierCount));
    
    
  }

  // disable autoClicker until donut count reaches 10
  enableAutoClickerBtn(){
    if(this.donutCount >= this.autoClickerCost) {
      
      document.getElementById("enable-auto-clicker").disabled = false;
      document.getElementById("enable-auto-clicker").style.color = "black";
      document.getElementById("enable-auto-clicker").style.background = "rgb(195, 55, 55)";
    } else {
      document.getElementById("enable-auto-clicker").disabled = true;
      document.getElementById("enable-auto-clicker").style.color = "grey";
      document.getElementById("enable-auto-clicker").style.background = "lightgrey";
    }
  }

  enableMultiClickerBtn(){
    if(this.donutCount >= this.donutMultiplierCost) {
      
      document.getElementById("enable-multi-clicker").disabled = false;
      document.getElementById("enable-multi-clicker").style.color = "black";
      document.getElementById("enable-multi-clicker").style.background = "rgb(195, 55, 55)";
    } else {
      document.getElementById("enable-multi-clicker").disabled = true;
      document.getElementById("enable-multi-clicker").style.color = "grey";
      document.getElementById("enable-multi-clicker").style.background = "lightgrey";
    }
  }
  

  
}

export default DonutMaker;
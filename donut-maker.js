class DonutMaker {
  constructor() {
    this.donutCount = 0;
    this.autoClickerCount = 0;
    this.autoClickerCost = 100;    // change to 100
    this.donutMultiplierCount = 0;
    this.donutMultiplierCost = 10;   // change to 10
  }

  // add to donutCount
  addToDonutCount(){
    //Math.round(this.donutCount++);

    if(this.autoClickerCount === 0 && this.donutMultiplierCount === 0){
      this.donutCount++;
    }else if(this.donutMultiplierCount > 0){
      this.donutCount += Math.round(Math.pow(1.2, this.donutMultiplierCount));
        // There's an equation that will allow you to increase the amunt you get per donut click!
    }
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
    this.donutCount -= 100;     // CHANGE TO 100
  }

  // buy secondAutoClicker
  buySecondAutoClicker(){
    this.donutCount -= 11;
  }

  // buy additionalAutoClicker
  buyAdditionalAutoClicker() {
    this.donutCount -= 100;          // CHANGE TO 100
    this.donutCount += Math.round((this.autoClickerCost * 0.1));
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

  // add to donut Multiplier
  // addToDonutMultiplierCount() {
  //   this.donutMultiplierCount++;
  // }




// subtract DonutMultiplier from DonutCount    //??????????????
  buyDonutMultiplier() {
    this.donutCount -= this.donutMultiplierCost;                 
  }


  increaseCostOfAutoClicker(){
    this.autoClickerCost = Math.round(this.autoClickerCost * 1.1);
  }

  ////////////////////////////////////////////////////
  // increaseMultiplierCountExponentially(){
  //   this.donutMultiplierCount = Math.round(Math.pow(1.2, this.donutMultiplierCount));
  // }

  increaseCostOfDonutMultiplier(){
    this.donutMultiplierCost = Math.round(this.donutMultiplierCost * 1.1);
  }

  increaseMultiplierCountExponentially(){
    this.donutCount += Math.round(this.autoClickerCount * Math.pow(1.2, this.donutMultiplierCount));
  }

  increaseDonutCountWithDonutMultiplier(){
    // if(this.donutMultiplierCount >= 1 ) {
       this.donutCount = Math.round(this.donutCount * Math.pow(1.2, this.donutMultiplierCount));
    }
  
  ////////////////////////////////////////////

  
  
  checkDonutCountToBuyDonutMultiplier(){
    if(this.donutCount >= this.donutMultiplierCost) {
      Math.round(this.donutCount - this.donutMultiplierCost);
    }
  }

  
  

  

  // disable autoClicker until donut count reaches 100
  enableAutoClickerBtn(){
    if(this.donutCount >= this.autoClickerCost) {
      
      document.getElementById("enable-auto-clicker").disabled = false;
      document.getElementById("enable-auto-clicker").style.color = "black";
      document.getElementById("enable-auto-clicker").style.background = "rgb(195, 55, 55)";
    } else {
      document.getElementById("enable-auto-clicker").disabled = true;
      document.getElementById("enable-auto-clicker").style.background = "rgb(196, 113, 113)";
    }
  }

  enableMultiClickerBtn(){
    if(this.donutCount >= this.donutMultiplierCost) {
      
      document.getElementById("enable-multi-clicker").disabled = false;
      document.getElementById("enable-multi-clicker").style.color = "black";
      document.getElementById("enable-multi-clicker").style.background = "rgb(195, 55, 55)";
    } else {
      document.getElementById("enable-multi-clicker").disabled = true;
      // document.getElementById("enable-multi-clicker").style.color = "grey";
      document.getElementById("enable-multi-clicker").style.background = "rgb(196, 113, 113)";
    }
  }
  

  
}

export default DonutMaker;
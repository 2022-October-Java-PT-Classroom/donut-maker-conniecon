class DonutMaker {
  constructor(donutCount, autoClickerCount, autoClickerCost, donutMultiplierCount, donutMultiplierCost) {
    this.donutCount = donutCount;
    this.autoClickerCount = autoClickerCount;
    this.autoClickerCost = autoClickerCost;
    this.donutMultiplierCount = donutMultiplierCount;
    this.donutMultiplierCost = donutMultiplierCost;

  }

  // add to donutCount
  donutCounter(){
    this.donutCount++;
  }

  // retrieve donutCount
  getDonutCount() {
    return this.donutCount;
  }

  // add to autoClickerCount
  autoClickerCounter(){
    this.autoClickerCount++;
  }

  // retrieve autoClickerCount
  getAutoClickerCount(){
    return this.autoClickerCount;
  }

  // buy AutoClicker
  buyAutoClicker(){
    this.donutCount -= 100;
  }

  // buy secondAutoClicker
  buySecondAutoClicker(){
    this.donutCount -= 110;
  }

  // buy additionalAutoClicker
  buyAdditionalAutoClicker() {
    this.donutCount - Math.round(this.autoClickerCost * 0.1);
  }

  // are there enough donuts to buy clicker
  checkDonutCountToBuyAutoClicker(){
    if(this.donutCount >= this.autoClickerCost * .1) {
      this.donutCount - this.autoClickerCost;
    }
  }
  // increase donut count when auto clicker is activated
  increaseDonutCountWhenAutoClickerIsActivated() {
    for (let i = 0; i < this.autoClickerCount; i++){
      this.donutCount++;
    }
  }

  // retrieve donut multiplier
  getDonutMultiplierCount() {
    return this.donutMultiplierCount;
  }

  // add to donut Multiplier
  donutMultiplierCounter() {
    this.donutMultiplierCount++;
  }




// subtract DonutMultiplier from DonutCount
  subtractDonutMultiplierCostFromDonutCount(){
    this.donutCount -= 10;
  }




  // increase donut Multiplier cost
  increaseCostOfDonutMultiplier(){
    this.donutMultiplierCost += Math.round(this.donutMultiplierCost * 0.1);
  }

  // are there enough donuts to buy multiplier
  checkDonutCountToBuyDonutMultiplier(){
    if(this.donutCount >= this.donutMultiplierCost) {
      this.donutCount - this.donutMultiplierCost;
    }
  }

  // increase donut count by 1.2 with one donutMultiplier
  increaseDonutCountWithFirstDonutMultiplier(){
    for (let i = 0; i < this.donutMultiplierCount; i++){
      this.donutCount += 1.2;
    }
  }

  // increase by 1.2x
  increaseMultiplierExponentially(){
    this.donutCount = Math.pow(1.2, DonutMultiplierCount);
  }
  

  
}

export default DonutMaker;
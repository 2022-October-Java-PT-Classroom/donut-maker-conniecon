import DonutMaker from './donut-maker.js';

describe ('DonutMaker object', () => {
  test('Does donutMaker add one donut to count?', () => {
    const underTest =  new DonutMaker(1);
    underTest.donutCounter();
    expect(underTest.donutCount).toEqual(2);
  });

  test("Does donutMaker retrieve the donut count?", () => {
    const underTest = new DonutMaker(1);
    underTest.donutCounter();
    underTest.getDonutCount();
    expect(underTest.donutCount).toEqual(2);
  });

  test("Does autoClicker add one donut to autoClickerCount", () => {
    const underTest = new DonutMaker(1, 100);
    underTest.autoClickerCounter();
    expect(underTest.autoClickerCount).toEqual(101);
  });

  test("Does autoClicker retrieve an auto clicker count", () => {
    const underTest = new DonutMaker(1, 100);
    underTest.getAutoClickerCount();
    expect(underTest.autoClickerCount).toEqual(100);
  });

  test("Does donutMaker subtract cost of autoClicker from donut count", () => {
    const underTest = new DonutMaker(100, 1);
    underTest.buyAutoClicker();
    expect(underTest.donutCount).toEqual(0);
  });

  test("Does donutMaker subtract cost of 110 donuts for second autoClicker from donut count",  () => {
    const underTest = new DonutMaker(110, 1);
    underTest.buySecondAutoClicker();
    expect(underTest.donutCount).toEqual(0);
  });

  test("Does donutMaker subtract cost of previous autoClicker plus 10%", () => {
    const underTest = new DonutMaker(121, 1, 100);
    underTest.buyAdditionalAutoClicker();
    expect(underTest.donutCount).toEqual(121);
  });

  test("Does donutMaker have enough donuts to buy autoClicker", () => {
    const underTest = new DonutMaker(121, 1, 100);
    underTest.checkDonutCountToBuyAutoClicker();
    expect(underTest.donutCount).toEqual(121);
  });

  test("increase donutCount by the amount of AutoClickerCount", () => {
    const underTest = new DonutMaker(1, 1, 100);
    underTest.increaseDonutCountWhenAutoClickerIsActivated();
    expect(underTest.donutCount).toEqual(2);
  });

  test("Does DonutMaker retrieve Donut Multiplier Count", () => {
    const underTest = new DonutMaker(10, 1, 100, 1, 10);
    underTest.getDonutMultiplierCount();
    expect(underTest.donutMultiplierCount).toEqual(1);
  });

  test("Does DonutMaker add to Donut Multiplier count", () => {
    const underTest = new DonutMaker(10, 1, 100, 1, 10);
    underTest.donutMultiplierCounter();
    expect(underTest.donutMultiplierCount).toEqual(2);
  });

  test("Subtract the amount of DonutMultiplier from donutCount", () => {
    const underTest = new DonutMaker(10, 1, 100, 1, 10);
    underTest.subtractDonutMultiplierCostFromDonutCount();
    expect(underTest.donutCount).toEqual(0);
  })

  test("increase cost of DonutMultiplier By 10%", () => {
    const underTest = new DonutMaker(10, 1, 100, 1, 10);
    underTest.increaseCostOfDonutMultiplier();
    expect(underTest.donutMultiplierCost).toEqual(11);
  });

  test("Does donutCount have enough donuts to buy donut Multiplier", () => {
    const underTest = new DonutMaker(10, 1, 1, 11, 10);
    underTest.checkDonutCountToBuyDonutMultiplier();
    expect(underTest.donutCount).toEqual(10);
  });

  test("Increase donutCount by 1.2x with first Donut Multiplier", () => {
    const underTest = new DonutMaker(0, 1, 1, 1, 0);
    underTest.increaseDonutCountWithFirstDonutMultiplier();
    expect(underTest.donutCount).toEqual(1.2);
  });

  test("Increase Multiplier to 1.2 * donutMultiplierCount", () => {
    const underTest = new DonutMaker();
    underTest.increaseMultiplierExponentially();
    expect(underTest.donutCount).toEqual();

  });

});
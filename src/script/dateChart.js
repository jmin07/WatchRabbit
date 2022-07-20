import { dummyData } from "./dummydata.js";

// function dateChartFunc() {
  const testObject = new Object();
  dummyData.forEach((item) => {
    let date = item.UpdateTime.slice(0, 8);
    if (!testObject[date]) testObject[date] = [];
    testObject[date].push(
      parseInt(item.Price.replace(",", "").replace("원", ""))
    );
  });

  const average = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;
  const finalData = new Array();
  for (let date in testObject) {
    finalData.push({
      date,
      minPrice: Math.min(...testObject[date]),
      maxPrice: Math.max(...testObject[date]),
      avgPrice: average(testObject[date]),
    });
  }
// }
console.log(finalData);

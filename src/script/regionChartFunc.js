function regionChartFunc(resData) {
  const average = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;
  const testObject = new Object();
  const finalData = new Array();

  resData.forEach((item) => {
    let region = item.Region;
    let price = item.Price;
    if (!testObject[region]) testObject[region] = [];
    if (testObject[region])
      testObject[region].push(
        parseInt(price.replace(",", "").replace("원", ""))
      );
  });

  // console.log("testObject: ", testObject);

  for (let region in testObject) {
    finalData.push({
      region,
      최저가: parseInt(Math.min(...testObject[region])),
      최고가: parseInt(Math.max(...testObject[region])),
      평균가: parseInt(average(testObject[region])),
    });
  }

  // console.log("finalData: ", finalData);

  return finalData;
}
export { regionChartFunc };

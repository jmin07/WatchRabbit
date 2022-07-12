// const db = {
//   수박: "10000",
//   사과: "1000",
//   포도: "15000",
//   키위: "7000",
//   망고: "4000",
//   딸기: "12000",
// };

// const db2 = [{ 항목: "수박", 가격: "10000" }];
// const dbArray = [];
// for (let key in db) {
//   const obj = {};
//   obj[key] = db[key];
//   dbArray.push(obj);
// }
// const data = "수박";
// const dbFilter = dbArray.filter(
//   (keyword, index) => data === Object.keys(dbArray[index])[0]
// );
// // console.log(dbArray);
// // console.log(data);

// // // console.log(Object.keys(dbArray[0])[0]);
// console.log(dbFilter);

// body: JSON.stringify({
//     city: Data.city,
//     area: Data.area,
//     item: Data.item,
//   }),

//   body: JSON.stringify({
//     city: {} Data.city,
//     area: Data.area,
//     item: Data.item,
//   }),
const city = "서울시";
const area = "독산동";

const db = {
  서울시: {
    가산동: [
      { item: "모자", price: "10000" },
      { item: "모자", price: "10000" },
    ],
    독산동: [
      { item: "수박", price: "10000" },
      { item: "수박", price: "10000" },
    ],
  },
};

// console.log(db[city][area]);
// db[서울시][가산동];

const test = JSON.stringify([
  { item: "모자", price: "10000" },
  { item: "모자", price: "10000" },
]);

// 서버 처리

const testjson = test.json();
console.log(testjson);

// test.forEach((index) => {
//   console.log(index);
// });

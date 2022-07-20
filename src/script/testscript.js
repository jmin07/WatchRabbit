// var dummyData = [
//   //받아왔다고 치는 데이터
//   {
//     IDX: 10568,
//     URL: "https://www.daangn.com/articles/19980",
//     Title: "LG 전자 울트라 PC 그램 노트북 팝니다~",
//     Price: "850,000원",
//     Classification: "디지털기기",
//     Region: "서울",
//     Province: "강남구",
//     Local: "일원1동",
//     Nickname: "당통통닭",
//     Temperature: "40.5",
//     UpdateTime: "20220718110559",
//   },
//   {
//     IDX: 14236,
//     URL: "https://www.daangn.com/articles/37561",
//     Title: "2차 가격내림 5000원) 노트북 잠금장치 Delta3",
//     Price: "10,000원",
//     Classification: "디지털기기",
//     Region: "서울",
//     Province: "강남구",
//     Local: "역삼2동",
//     Nickname: "뮤즈맘",
//     Temperature: "41.2",
//     UpdateTime: "20220718131616",
//   },
//   {
//     IDX: 14236,
//     URL: "https://www.daangn.com/articles/37561",
//     Title: "2차 가격내림 5000원) 노트북 잠금장치 Delta3",
//     Price: "130,000원",
//     Classification: "디지털기기",
//     Region: "서울",
//     Province: "강남구",
//     Local: "역삼2동",
//     Nickname: "뮤즈맘",
//     Temperature: "41.2",
//     UpdateTime: "20220718131616",
//   },
//   {
//     IDX: 14236,
//     URL: "https://www.daangn.com/articles/37561",
//     Title: "2차 가격내림 5000원) 노트북 잠금장치 Delta3",
//     Price: "14,000원",
//     Classification: "디지털기기",
//     Region: "서울",
//     Province: "강남구",
//     Local: "역삼2동",
//     Nickname: "뮤즈맘",
//     Temperature: "41.2",
//     UpdateTime: "20220718131616",
//   },
//   {
//     IDX: 14236,
//     URL: "https://www.daangn.com/articles/37561",
//     Title: "2차 가격내림 5000원) 노트북 잠금장치 Delta3",
//     Price: "14,300원",
//     Classification: "디지털기기",
//     Region: "서울",
//     Province: "강남구",
//     Local: "역삼2동",
//     Nickname: "뮤즈맘",
//     Temperature: "41.2",
//     UpdateTime: "20220718131616",
//   },
//   {
//     IDX: 14236,
//     URL: "https://www.daangn.com/articles/37561",
//     Title: "2차 가격내림 5000원) 노트북 잠금장치 Delta3",
//     Price: "15,420원",
//     Classification: "디지털기기",
//     Region: "서울",
//     Province: "강남구",
//     Local: "역삼2동",
//     Nickname: "뮤즈맘",
//     Temperature: "41.2",
//     UpdateTime: "20220718131616",
//   },
//   {
//     Classification: "디지털기기",
//     IDX: 56909,
//     Local: "역삼2동",
//     Nickname: "Oiamtw",
//     Price: "10,000원",
//     Province: "강남구",
//     Region: "서울",
//     Temperature: "37.1",
//     Title: "삼성 블루투스 키보드 마우스",
//     URL: "https://www.daangn.com/articles/431742178",
//     UpdateTime: "20220719031419",
//   },
//   {
//     Classification: "디지털기기",
//     IDX: 57210,
//     Local: "역삼2동",
//     Nickname: "Oiamtw",
//     Price: "5,000원",
//     Province: "강남구",
//     Region: "서울",
//     Temperature: "37.1",
//     Title: "무선충전 마우스패드",
//     URL: "https://www.daangn.com/articles/431742588",
//     UpdateTime: "20220719031602",
//   },
//   {
//     Classification: "디지털기기",
//     IDX: 57395,
//     Local: "역삼2동",
//     Nickname: "Oiamtw",
//     Price: "5,000원",
//     Province: "강남구",
//     Region: "서울",
//     Temperature: "37.1",
//     Title: "무산 충전 마우스패드",
//     URL: "https://www.daangn.com/articles/431742843",
//     UpdateTime: "20220719031704",
//   },
//   {
//     Classification: "디지털기기",
//     IDX: 60854,
//     Local: "신사동",
//     Nickname: "도룡뇽",
//     Price: "60,000원",
//     Province: "강남구",
//     Region: "서울",
//     Temperature: "41.6",
//     Title: "매직마우스 2세대 풀박스",
//     URL: "https://www.daangn.com/articles/431747569",
//     UpdateTime: "20220719033655",
//   },
//   {
//     Classification: "디지털기기",
//     IDX: 61238,
//     Local: "도곡동",
//     Nickname: "지브라",
//     Price: "50,000원",
//     Province: "강남구",
//     Region: "서울",
//     Temperature: "36.6",
//     Title: "애플 매직마우스",
//     URL: "https://www.daangn.com/articles/431748089",
//     UpdateTime: "20220719033909",
//   },
//   {
//     Classification: "게임/취미",
//     IDX: 84920,
//     Local: "대치동",
//     Nickname: "땅구땅",
//     Price: "10,000원",
//     Province: "강남구",
//     Region: "서울",
//     Temperature: "36.9",
//     Title: "로지텍 g102 마우스 판매합니다",
//     URL: "https://www.daangn.com/articles/431780696",
//     UpdateTime: "20220719114227",
//   },
// ];

import { dummyData } from "./dummydata.js";

function chartDataFunc(dummyData) {
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
      최소가: Math.min(...testObject[date]),
      최고가: Math.max(...testObject[date]),
      평균가: parseInt(average(testObject[date])),
    });
  }
  return finalData;
}
// console.log(finalData);
export { chartDataFunc };

// const testObject = {};
// resData.forEach((item) => {
//   testObject[resData[0].UpdateTime.slice(0, 8)] = resData[0].Price;
// });
// console.log("testObject", testObject);

// const dayList = resData.map((item) => {
//   return item.UpdateTime.slice(0, 8);
// });
// const setDayList = new Set(dayList);
// const arrDayList = [...setDayList];
// console.log(arrDayList);

// let result = {}
// arrDayList.forEach((day) => {
//   resData.map((resItem) => {
//     if(day === resItem.UpdateTime.slice(0.8)){
//       let tempArr = []
//       tempArr.push(resItem.Price)
//       평균
//       result.날짜 = 평균

//     }
//   });
// });

// for (let i = 0; i < resData.length; i++) {
//   if (resData[i].UpdateTime.slice(0,8) ===)
// }

// console.log("UpdateTime", resData[0].UpdateTime.slice(0, 8));

// //저장된 변수 값 출력
// // console.log(st_region);
// // console.log(st_local);
// // console.log(st_nickname);
// // console.log(st_title);
// // console.log(st_classfication);
// // console.log(st_price);
// // console.log(st_url);
// function get_stData() {
//   var st_serchDay; //데이터 검색일
//   var st_priceAverageAllRegion; //전국 평균가격
//   var st_priceMinAllRegion; //전국 최저가격
//   var st_priceMaxAllRegion; //전국 최대가격
//   var st_postNumber; //전체 게시글 수
//   var st_priceWithoutWon = [];
//   //검색테이블 리스트정보 전역변수
//   for (let i = 0; i < resData.length; i++) {
//     // var st_region = [resData[i].Region];
//     // var st_local = [resData[i].Local];
//     // var st_nickname = [resData[i].Nickname];
//     // var st_title = [resData[i].Title];
//     // var st_classfication = [resData[i].Classification];
//     var st_price = resData[i].Price.replace(",", "");
//     st_priceWithoutWon.push(parseInt(st_price));
//   }
//   //   console.log(st_price);
//   //   console.log("st_priceWithoutWon", st_priceWithoutWon);

//   let today = new Date();
//   //현재 날짜를 찾아주는 코드 OK
//   let year = today.getFullYear();

//   //검색테이블 전국정보 전역변수

//   let month = ("0" + (today.getMonth() + 1)).slice(-2);
//   let day = ("0" + today.getDate()).slice(-2);
//   let hours = ("0" + today.getHours()).slice(-2);
//   let minutes = ("0" + today.getMinutes()).slice(-2);
//   let seconds = ("0" + today.getSeconds()).slice(-2);

//   st_serchDay = year + "년" + month + "월" + day + "일"; //데이터 검색일에 쓸 오늘 날짜 변수
//   console.log("오늘 날짜 : " + st_serchDay);

//   //전체 게시글 가져와주는 코드 OK
//   st_postNumber = resData.length;
//   console.log("전체게시글수: " + st_postNumber);

//   //가격 들어왔을 때 "원"빼주는 코드
//   //   console.log(st_priceWithoutWon); //"원"빼주는 콘솔

//   //전국 최저가격과 최대가격 찾는 코드
//   st_priceMaxAllRegion = Math.max(...st_priceWithoutWon);
//   st_priceMinAllRegion = Math.min(...st_priceWithoutWon);

//   console.log("최댓값: " + st_priceMaxAllRegion); //최대값 출력 확인
//   console.log("최소값: " + st_priceMinAllRegion); //최소값 출력 확인

//   //전국 평균가격 얻는 함수
//   //   const arr = [st_priceWithoutWon];
//   const result = st_priceWithoutWon.reduce(function add(sum, currValue) {
//     return sum + currValue;
//   }, 0);
//   st_priceAverageAllRegion = parseInt(result / st_priceWithoutWon.length);
//   console.log("평균값: " + st_priceAverageAllRegion);
//   return [
//     st_serchDay,
//     st_priceAverageAllRegion,
//     st_priceMinAllRegion,
//     st_priceMaxAllRegion,
//     st_postNumber,
//   ];
// }

// //   export { get_stData };

// console.log("리턴값", get_stData(resData));

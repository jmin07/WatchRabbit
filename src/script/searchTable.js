// var resData = [
//   //받아왔다고 치는 데이터
//   {
//     IDX: 10568,
//     URL: "https://www.daangn.com/articles/19980",
//     Title: "LG 전자 울트라 PC 그램 노트북 팝니다~",
//     Price: "850000원",
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
//     Price: "10000원",
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
//     Price: "130000원",
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
//     Price: "14000원",
//     Classification: "디지털기기",
//     Region: "서울",
//     Province: "강남구",
//     Local: "역삼2동",
//     Nickname: "뮤즈맘",
//     Temperature: "41.2",
//     UpdateTime: "20220718131616",
//   },
// ];

//저장된 변수 값 출력
// console.log(st_region);
// console.log(st_local);
// console.log(st_nickname);
// console.log(st_title);
// console.log(st_classfication);
// console.log(st_price);
// console.log(st_url);
function get_stData(resData) {
  var st_serchDay; //데이터 검색일
  var st_priceAverageAllRegion; //전국 평균가격
  var st_priceMinAllRegion; //전국 최저가격
  var st_priceMaxAllRegion; //전국 최대가격
  var st_postNumber; //전체 게시글 수
  var st_priceWithoutWon = [];
  //검색테이블 리스트정보 전역변수
  for (let i = 0; i < resData.length; i++) {
    // var st_region = [resData[i].Region];
    // var st_local = [resData[i].Local];
    // var st_nickname = [resData[i].Nickname];
    // var st_title = [resData[i].Title];
    // var st_classfication = [resData[i].Classification];
    var st_price = resData[i].Price.replace(",", "");
    st_priceWithoutWon.push(parseInt(st_price));
  }
  // console.log(st_priceWithoutWon);

  let today = new Date();
  //현재 날짜를 찾아주는 코드 OK
  let year = today.getFullYear();

  //검색테이블 전국정보 전역변수

  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);
  // let hours = ("0" + today.getHours()).slice(-2);
  // let minutes = ("0" + today.getMinutes()).slice(-2);
  // let seconds = ("0" + today.getSeconds()).slice(-2);

  st_serchDay = year + "년" + month + "월" + day + "일"; //데이터 검색일에 쓸 오늘 날짜 변수
  // console.log("오늘 날짜 : " + st_serchDay);

  //전체 게시글 가져와주는 코드 OK
  st_postNumber = resData.length;
  // console.log("전체게시글수: " + st_postNumber);

  //가격 들어왔을 때 "원"빼주는 코드
  //   console.log(st_priceWithoutWon); //"원"빼주는 콘솔

  //전국 최저가격과 최대가격 찾는 코드
  st_priceMaxAllRegion = Math.max(...st_priceWithoutWon);
  st_priceMinAllRegion = Math.min(...st_priceWithoutWon);

  // console.log("최댓값: " + st_priceMaxAllRegion); //최대값 출력 확인
  // console.log("최소값: " + st_priceMinAllRegion); //최소값 출력 확인

  //전국 평균가격 얻는 함수
  //   const arr = [st_priceWithoutWon];
  const result = st_priceWithoutWon.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  st_priceAverageAllRegion = parseInt(result / st_priceWithoutWon.length);
  // console.log("평균값: " + st_priceAverageAllRegion);
  return [
    st_serchDay,
    st_priceAverageAllRegion,
    st_priceMinAllRegion,
    st_priceMaxAllRegion,
    st_postNumber,
  ];
}

export { get_stData };

// console.log("리턴값", get_stData(resData));

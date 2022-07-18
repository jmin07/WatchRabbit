//2022년 07월 물품찾기 페이지 자바스크립트 계산 코드 by 홍승진

//데이터
var data = [
  {
    IDX: 10568,
    URL: "https://www.daangn.com/articles/19980",
    Title: "LG 전자 울트라 PC 그램 노트북 팝니다~",
    Price: "850,000원",
    Classification: "디지털기기",
    Region: "서울",
    Province: "강남구",
    Local: "일원1동",
    Nickname: "당통통닭",
    Temperature: "40.5",
    UpdateTime: "20220718110559",
  },
  {
    IDX: 14236,
    URL: "https://www.daangn.com/articles/37561",
    Title: "2차 가격내림 5000원) 노트북 잠금장치 Delta3",
    Price: "10,000원",
    Classification: "디지털기기",
    Region: "서울",
    Province: "강남구",
    Local: "역삼2동",
    Nickname: "뮤즈맘",
    Temperature: "41.2",
    UpdateTime: "20220718131616",
  },
];

//검색테이블 전국정보 전역변수
var st_serchDay; //데이터 검색일
var st_priceAverageAllRegion; //전국 평균가격
var st_priceMinAllRegion; //전국 최저가격
var st_priceMaxAllRegion; //전국 최대가격
var st_postNumber; //전체 게시글 수

//검색테이블 리스트정보 전역변수
var st_region = [data[0].Region];
var st_local = [data[0].Local];
var st_nickname = [data[0].Nickname];
var st_title = [data[0].Title];
var st_classfication = [data[0].Classification];
var st_price = [data[0].Price];
var st_url = [data[0].URL];

console.log(st_region);
console.log(st_local);
console.log(st_nickname);
console.log(st_title);
console.log(st_classfication);
console.log(st_price);
console.log(st_url);

function tody() {
  //현재 날짜를 찾아주는 함수
  let today = new Date();
  let year = today.getFullYear();
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);
  let hours = ("0" + today.getHours()).slice(-2);
  let minutes = ("0" + today.getMinutes()).slice(-2);
  let seconds = ("0" + today.getSeconds()).slice(-2);
  st_serchDay = year + "년" + month + "월" + day + "일"; //데이터 검색일에 쓸 오늘 날짜 변수

  return st_serchDay;
}

// //물품찾기 테이블에 전국정보를 채워주는 함수.
function st_function(data) {
  //전체 게시글 갯수 세주는 코드
  const items = data.map((item) => {
    console.log(item);
  });
  st_postNumber = st_url.length;
  const date = tody();

  /*
  //전국 평균가격 얻는 함수
  let st_sumPrice = 0;
  let st_plusPrice = 0;
  for (let i = 0; i < st_price.length; i++) {
    st_plusPrice = st_price[i].filter((change) => change != `원`);
    st_sumPrice = st_sumPrice + st_plusPrice;
  }
  st_priceAverageAllRegion = st_sumPrice / st_price.length;
  */

  //전국 최저가격과 최대가격 찾는 함수
  st_priceMaxAllRegion = Math.min.apply(null, st_price);
  st_priceMinAllRegion = Math.max.apply(null, st_price);
}

console.log(st_priceMaxAllRegion);

st_function(data);
// export { st_function };

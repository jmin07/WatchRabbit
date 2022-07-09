// (핵심코드) 당근마켓 주소를 추적해서 모든 제품 크롤링하기.
const axios = require("axios"); //HTTP 쓰게해줌
const cheerio = require("cheerio"); //parsing 쉽게 해줌
const dfd = require('danfojs-node'); //node의 pands
const mysql = require('mysql2/promise');

//↓게시글 숫자 Count 하는 변수.
var count_forcount = 0; //페이지 크롤링 반복 횟수 저장
var count_AllCountedPost = 0; //전체 카운트 한 글 수
var count_OnSalePost = 0; //판매중일 경우 카운트
var count_SecretPost = 0; //비밀글일 경우 카운트
var count_NullPost = 0; //비어있는 글일 경우 카운트
var count_UnknownPost = 0; //파악 불가능한 게시글
var count_exceptPost = 0; //예외 게시글
var count_TotalPost = 0; //전체 게시글 수

//↓데이터 저장하는 전역 변수.
var save_OnSalePostURLCode = []; //게시글있으면 URL 저장하는 변수
var save_itemTitle = []; //글제목 저장 변수
var save_price = []; //가격 저장 변수
var save_classification = []; //분류 저장 변수
var save_nickname = []; //글쓴이 저장 변수
var save_region = []; //동네+지역 저장 변수
var save_description = []; //글내용 저장 변수
var save_attention = []; //관심, 채팅, 조회 저장 변수
var save_temperature = []; //매너온도 저장 변수
var save_Province = []; //지역 저장 변수 (ex.인천)
var save_Local = []; //동네 저장 변수 (ex.연수구)
var save_targetProvince = ''; //대분류 지역 임시저장(ex.인천)
var save_targetRegion = ''; //중분류 지역 임시저장 (ex.연수구)

//↓지역을 저장하는 2차원 배열
var Data_RegionArray = 
[
    //0전국
    ['서울','부산','대구','인천','광주','대전','울산','세종','경기','강원','충북','충남','전북','전남','경북','경남','제주'],
    //1서울
    ['강남구','강동구','강북구','강서구','관악구','광진구','구로구','금천구','노원구','도봉구','동대문구','동작구','마포구','서대문구','서초구','성동구','성북구','송파구','양천구','영등포구','용산구','은평구','종로구','중구','중랑구'],
    //2부산
    ['강서구','금청구','기장군','남구','동구','동래구','부산진구','북구','사상구','사하구','서구','수영구','연제구','영도구','중구','해운대구'],
    //3대구
    ['남구','달서구','달성군','동구','북구','서구','수성구','중구'],
    //4인천
    ['강화군','계양구','남동구','동구','미추홀구','부평구','서구','연수구','옹진군','중구'],
    //5광주
    ['광산구','남구','동구','북구','서구'],
    //6대전
    ['대덕수','동구','서구','유성구','중구'],
    //7울산
    ['남구','동구','북구','울주군','중구'],
    //8세종
    ['가람동','고운동','금남면','나성동','다정동','대평동','도담동','반곡동','보람동','부강면','새롬동','소담동','소정면','아름동','어진동','연기면','연돔연','연서면','장군면','전동면','전의면','조치원읍','종촌동','집현동','한솔동','해밀동'],
    //9경기
    ['가평군','고양시덕양구','고양시일산동구','고양시일산서구','과천시','광명시','광주시','구리시','군포시','김포시','남양주시','동두천시','부천시 소사구','부천시 오정구','부천시 원미구','성남시 분당구','성남시 수정구','성남시 중원구','수원시 권선구','수원시 영통구','수원시 장안구','수원시 팔달구','시흥시','안산시 단원구','안산시 상록구','산성시','안양시 동안구','안양시 만안구','양주시','양평군','여주시','연천군','오산시','용인시 기흥구','용인시 수지구','용인시 처인구','의왕시','의정부시','이천시','파주시','평택시','포천시'],
    //10강원
    ['강릉시','고성군','동해시','삼척시','속초시','양구군','양양군','영월군','원주시','인제군','정선군','철원군','춘천시','태백시','평창군','홍천군','화천군','횡성군'],
    //11충북
    ['괴산군','단양군','보은군','영동군','영동군','옥천군','음성군','제천시','증평군','진천군','청주시 상당구','청주시 서원구','청주시 청원구','청주시 홍덕구','충주시'],
    //12충남
    ['계룡시','공주시','금산군','논산시','당진시','보령시','부여군','서산시','서천군','아산시','예산군','천안시 동남구','천안시 서북구','청양군','태안군','홍성군'],
    //13전북
    ['고창군','군산시','김제시','남원시','무주군','부안군','순창군','완주군','익산시','임실군','장수군','전주시 덕진구','전주시 완산구','정읍시','진안군'],
    //14전남
    ['강진군','고흥군','곡성군','광양시','구례군','나주시','담양군','목포시','무안군','보성군','순천시','신안군','여수시','영광군','영암군','완도군','장성군','장흥군','진도군','함평군','해남군','화순군'],
    //15경북
    ['경산시','경주군','고령군','구미시','군위군','김천시','문경시','봉화군','상주시','성주군','안동시','영덕군','영양군','영주시','영천시','예천군','울릉군','울진군','의성군','청도군','청송군','칠곡군','포항시 남구','포항시 북구'],
    //16경남
    ['거제시','거창군','고성군','김해시','남해군','밀양시','사천시','산청군','양산시','의령군','진주시','창녕군','창원시 마산합포구','창원시 마산회원구','창원시 성산구','창원시 의창구','창원시 진해구','통영시','하동군','함안군','함양군','합천군'],
    //17제주
    ['서귀포시','제주시']
]; // 대분류: 17개 Region,  중분류: 시, 구, 군  , 소분류: "동네들"


// ------------------------------------------------ 파괴 예정 !! 07.09  ------------------------------------------------
function find_region(getLocal){
    const regionAndLocalData = getLocal.split(' '); //입력된 지역 정보에 대한 문자열을 split 하고 배열에 저장함.
    const exceptRegion = regionAndLocalData[0] +  ' ' + regionAndLocalData[1]; //예외적인 지역명칭을 분류하기 위한 변수.
    for(let i = 0; i < 18 ; i++){
        if(Data_RegionArray[i].indexOf(exceptRegion) != -1){ //전체지역 2차원배열에서 2단어형 지역검색
            //console.log(Data_RegionArray[0][i-1]);
            //console.log(exceptRegion);
            save_targetProvince = Data_RegionArray[0][i-1];
            save_targetRegion = exceptRegion;
            //console.log("해당하는 찾음 : " + Data_RegionArray[0][i-1] + "의 " + (exceptRegion));
            break;
        } else if (Data_RegionArray[i].indexOf(regionAndLocalData[0]) != -1) { //일반적인 1개 단어 지역검색
            //console.log(Data_RegionArray[0][i-1]);
            //console.log(regionAndLocalData[0]);
            save_targetProvince = Data_RegionArray[0][i-1];
            save_targetRegion = regionAndLocalData[0];
            //console.log("해당하는 찾음 : " + Data_RegionArray[0][i-1] + "의 " + regionAndLocalData[0]);
            break;
        } else {
            //해당 배열에 없음 -> 무시
        }
    }
    //console.log(`변수에 저장된 Province` + save_targetProvince);
    //console.log(`변수에 저장된 Region` + save_targetRegion);
    save_Province.push(save_targetProvince); //리턴[0] Province(지역)을 변수에 저장하기
    save_Local.push(save_targetRegion); //리턴[1] Local(동네)을 변수에 저장하기
} //이슈 메모:  (2022.07.08.17시.14분 홍승진) break문이기 때문에 동일한 이름이 있는 지역이 있으면 먼저 검색되는 지점을 먼저 확정해버림.
// ------------------------------------------------ 파괴 예정 !! 07.09  ------------------------------------------------


//↓동작코드's, Main Code'S

const getHTML = async(keyword) => {
        return await axios.get("https://www.daangn.com/articles/" + encodeURI(keyword)) 
        // keyword에 반복하여 확인할 게시글의 숫자가 들어감.
        // https://www.daangn.com/articles/   -> 당근마켓 주소 앞부분
        // encodeURI(keyword)    -> 반복문을 통해 가져올 게시글의 번호
        // encodeURI()은 UFT-8방식으로 받게하여 한글도 입력할 수 있게 해줌 -> 현 상황에서는 없어도됨.
} //html코드 옮겨줌.

const parsing = async (keyword) => {
    try{ //일반 판매글 & 숨겨진 게시글
        const html = await getHTML(keyword);
        const $ = cheerio.load(html.data); //html의 data를 전부 가져오라.
        const $courseList = $("html"); //가져올 내용의 상위 div *HTML로 하면 HTML 전체에서 다시 찾음. body, head 등 가능.
        let courses = []; //JSON형태로 내용저장
        $courseList.each((idx, node) => { // (반복문!) 위에 저장된 자료들로 반복하여 Json 형태로 저장한다. -> 미사용인것 같은데요? 실험필요 (2022.07.09 홍승진)
            courses.push({
                //head부분에서 가져오는 정보
                head_URL: $(node).find(`meta[property="og:url"]`).attr('content'),
                head_itemTitle: $(node).find(`meta[name="twitter:title"]`).attr('content'),
                head_classification: $(node).find(`meta[name="product:category"]`).attr('content'),
                head_price: $(node).find(`meta[name="product:price:amount"]`).attr('content'),  //정리필요2022.06.30 -> 숫자, "원" 구분해야함.
                head_region: $(node).find(`meta[name="twitter:data2"]`).attr('content'),
                head_description: $(node).find(`meta[name="twitter:description"]`).attr('content'), //정리필요2022.06.30 \n 제거해야함.
                //body부분에서 가져오는 정보
                body_itemTitle : $(node).find("#article-title").text(), 
                body_classification : $(node).find("#article-category").text(), //정리필요2022.06.30 -> 분류, 끌올 구분해야함.
                body_price : $(node).find("#article-price").text(),
                body_nickname : $(node).find("#nickname").text(),
                body_region : $(node).find("#region-name").text(),
                body_detil : $(node).find("#article-detail").text(),   //정리필요2022.06.30 -> \n과 +표시를 해결하고 문장으로 해도 좋을 듯.
                body_Attention : $(node).find("#article-counts").text(),  //정리필요2022.06.30 -> 관심, 채팅, 조회와 각 숫자 분리해야함
                //만약 html 내부에 no_article이 있을 경우 사용, no_ariticle은 내용이 없는 페이지에서 가끔 나옴. 없는 페이지로 분류함.
                no_article : $(node).find("#no-article").text() 
            })

            //↓ Title에서 쉼표(rest) 제거하고 title을 저장하게 해주는 코드 (2022.07.07 홍승진)
            let BeforeChangeTitleRest = ""; //Title에서 쉼표 제거하기 전 먼저 저장하는 변수
            BeforeChangeTitleRest = $(node).find(`meta[name="twitter:title"]`).attr('content'); //지역변수에 title을 저장. (쉼표 있는 상태)
            let Save_changeTitleToArray = [...BeforeChangeTitleRest]; //배열로 나누어서 title을 저장
            let AfterChangeTitleRest = Save_changeTitleToArray.filter(change => change != ',' & change != `'`); //Title에서 쉼표 제거하고 옮겨주는 변수
            let ResultChangeTitle = AfterChangeTitleRest.join(''); //배열로 나누어진 쉼표 없는 title 배열을 합치기.

            //↓ 매너온도 전체문장에서 숫자만 가져오기(2022.07.09 홍승진)
            let BeforeChangeTemperature = String($(node).find("#article-profile-right").text()); //Temperature내용을 지역변수에 저장.
            let save_changeTemperatureToArray = [...BeforeChangeTemperature]; //배열로 나누어 Temperature 내용 저장
            let AfterChangeTemperature = save_changeTemperatureToArray.filter(  // Temperature 필터링
                change => 
                change != ' ' & 
                change != `°` & 
                change != `C` & 
                change != `\n` & 
                change != `매` & 
                change != `너` & 
                change != `온` & 
                change != `도` 
                ); //temperature에서 제거할 대상 제거. (온도표시, "매너온도", 줄 바꿈 및 띄어쓰기.)
            let ResultChangeTemperature = AfterChangeTemperature.join(''); //배열로 나누어진 변환된 Temperature 배열을 합치기.

            //↓ 각 배열에 웹크롤링해서 얻은 값을 저장하는 code (2022.07.08 홍승진)
            if($(node).find("#article-title").text() != ""){ //if게시글 제목div가 있다면 == 판매 중인 글이라면!, 변수에 저장하기.
                count_OnSalePost += 1; //일반 판매글 ++
                count_TotalPost += 1; //전체 카운트 ++
                //중간 log 알람
                console.log($(node).find(`meta[property="og:url"]`).attr('content') + " is OnSalePost, total OnSalePost :" + count_OnSalePost + " / total: " + count_TotalPost);
                //저장하는 전역변수 배열에 push 하기.
                save_OnSalePostURLCode.push($(node).find(`meta[property="og:url"]`).attr('content')); //배열에 URL코드 저장
                save_itemTitle.push(ResultChangeTitle); //배열에 글 제목 저장 (ResultChangeTitle == 쉼표, 작은따옴표 빼 낸 문자열.)
                save_price.push($(node).find(`meta[name="product:price:amount"]`).attr('content')); //가격
                save_classification.push($(node).find(`meta[name="product:category"]`).attr('content'));//분류
                save_nickname.push($(node).find("#nickname").text()); //글쓴이
                save_region.push($(node).find("#region-name").text()); //동네+지역
                save_description.push($(node).find(`meta[name="twitter:description"]`).attr('content')); //글내용
                save_attention.push($(node).find("#article-counts").text()); //관심, 채팅, 조회
                save_temperature.push(ResultChangeTemperature);//온도
                find_region($(node).find("#region-name").text()); //함수로 지역받기-> 함수 내부에서 배열에 push 해줌!
            }else if($(node).find("#no-article").text() != ""){ //if비밀글 div가 있다면?
                count_SecretPost += 1; //비밀글 ++
                count_TotalPost += 1; //전체 카운트 ++
                //중간 log 알람
                console.log($(node).find(`meta[property="og:url"]`).attr('content') + " is SecretPost, total SecretPost :" + count_SecretPost + " / total: " + count_TotalPost);
            }else{ // 예외처리
                count_exceptPost += 1; //예외글 ++
                count_TotalPost += 1; //전체 카운트 ++
                //중간 log 알람
                console.log($(node).find(`meta[property="og:url"]`).attr('content') + "is exceptPost, total exceptPost :" + count_exceptPost + " / total: " + count_TotalPost);
            }
        });
    } catch (err) { 
        count_UnknownPost += 1 //err발생 파악불가 ++
        count_TotalPost += 1; //전체 카운트 ++
        console.log("err UnknownPost, total UnknownPost :" + count_UnknownPost + " / total: " + count_TotalPost);
    } 
}
//Main같은 코드, 최종 출력부 담당. (시작부분)
console.log("!!!!!Count_strat!!!!!" + Date());
var startTime = Date();
(async function (){
    //실제로 반복문을 통해 크롤링 하는 코드
    for (step = 423480000; step < 423481000; step++){ //크롤링 Page 범위
        await parsing(step);
        count_forcount ++; //반복 횟수 저장
    }
    // for(i = 0; i < save_OnSalePostURLCode.length; i ++){ // (콘솔 확인용 코드) 저장된 배열의 모든 부분 출력하기.
    //     console.log("  url:" + save_OnSalePostURLCode[i]);
    //     console.log("  itemTitle:" + save_itemTitle[i]); //글제목
    //     console.log("  price:" + save_price[i]); //가격
    //     console.log("  classification:" + save_classification[i]); //분류
    //     console.log("  nickname:" + save_nickname[i]); //글쓴이
    //     console.log("  region:" + save_region[i]); //지역
    // }  
    console.log("!!!!!Count_end!!!!!" + Date() + " ~ " + startTime); //끝 알림 + 시작시간 ~ 끝난시간 표시.
    count_AllCountedPost = count_OnSalePost + count_SecretPost + count_NullPost + count_UnknownPost;
    console.log("전체 크롤링한 페이지 수:"+count_AllCountedPost);
    console.log("크롤링 반복 횟수:"+count_forcount);
    console.log("  총 판매글 수:"+count_OnSalePost);
    console.log("  총 비밀글 수:"+count_SecretPost);
    console.log("  총 없는글 수:"+count_NullPost);
    console.log("  총 예외글 수:"+count_exceptPost);
    console.log("  총 파악불가 글:"+count_UnknownPost);
    console.log("-------------");

    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        //port: '3000',
        password: '123456',
        database: 'testdb'
    })
    console.log(save_OnSalePostURLCode)
    const arr = [] //MySQL 저장할 내용 모아놓는 배열
    for (let i=0; i<save_OnSalePostURLCode.length; i++){

        arr.push([
            save_OnSalePostURLCode[i],
            save_itemTitle[i], 
            save_price[i], 
            save_classification[i], 
            save_region[i], 
            save_Province[i],
            save_Local[i],
            save_nickname[i],
            save_temperature[i]
        ])
        
        //확인용 콘솔
        console.log([
            save_OnSalePostURLCode[i],
            save_itemTitle[i], 
            save_price[i], 
            save_classification[i], 
            save_region[i], 
            save_Province[i],
            save_Local[i],
            save_nickname[i],
            save_temperature[i]
        ])
    }
    //console.log(arr)
    //console.log(arr[0][0])
    
    //MySQL Insert Code
    try{
        const conn = await pool.getConnection(); 

        console.log('----------- start conn --------------');        
        try{
            for (let i=0; i< arr.length; i++){
                const query = `
                    INSERT INTO firstrabbit(URL, Title, Price, Classification, Region, Province, Local, Nickname, Temperature)
                    VALUES ('${arr[i][0]}', '${arr[i][1]}', '${arr[i][2]}', '${arr[i][3]}', '${arr[i][4]}', '${arr[i][5]}', '${arr[i][6]}', '${arr[i][7]}', '${arr[i][8]}');  
                `;
                console.log('----------- start query --------------');
                const [result] = await conn.query(query)
                console.log(result)
                 if(result.ok){
                    console.log('result: ', result.ok)
                } else {
                    console.log('error');
                }
            }
        } catch (error) {
           console.log("---------------- query error ------------------");
           console.log(error);
        } finally{
            conn.release();
            console.log("!!!!!Count_end!!!!!__CountTime : " + startTime + " ~ " + Date());
        }
    }   catch (error){
        console.log("---------------- error ------------------");
        console.log(error);
    }

})();

/**
 * [시작 참조 강의]
 * URL:  https://www.youtube.com/watch?v=xbehh8lWy_A
 * Titel: Node.js 크롤링 - 인프런 사이트 크롤링하기.
 * author: 개발자의 품격
 * -> 에서 코드를 참조하여 기술적 문제를 해결함.
 */

/**
 * [웹 크롤링 소요시간 메모]
 * 500개: 16:16:05 ~16:18:43 (약2분40초)
 * 10,000개: 16:33:19 ~ 17:27:00 (약54분)
 * 1,000개: Thu Jul 07 2022 18:55:22 ~ Thu Jul 07 2022 19:00:23 
 * 10,000개(423430000 ~ 423440000): Fri Jul 08 2022 08:12:51 ~ Fri Jul 08 2022 08:56:38 (약44분)
 * 10,000개(423440000 ~ 423450000): Fri Jul 08 2022 08:25:08 ~ Fri Jul 08 2022 09:08:14 (약43분)
 * //아래 3개는 동시에 진행함.
 * 10,000개(423450000 ~ 423460000): Fri Jul 08 2022 10:04:04 ~ Fri Jul 08 2022 10:47:59 (약43분)
 * 10,000개(423460000 ~ 423470000): Fri Jul 08 2022 10:04:39 ~ Fri Jul 08 2022 10:48:27 (약44분)
 * 10,000개(423470000 ~ 423480000): Fri Jul 08 2022 10:06:17 ~ Fri Jul 08 2022 10:50:23 (약44분)
 */
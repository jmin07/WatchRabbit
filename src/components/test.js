// // const db = {
// //   수박: "10000",
// //   사과: "1000",
// //   포도: "15000",
// //   키위: "7000",
// //   망고: "4000",
// //   딸기: "12000",
// // };

// // const db2 = [{ 항목: "수박", 가격: "10000" }];
// // const dbArray = [];
// // for (let key in db) {
// //   const obj = {};
// //   obj[key] = db[key];
// //   dbArray.push(obj);
// // }
// // const data = "수박";
// // const dbFilter = dbArray.filter(
// //   (keyword, index) => data === Object.keys(dbArray[index])[0]
// // );
// // // console.log(dbArray);
// // // console.log(data);

// // // // console.log(Object.keys(dbArray[0])[0]);
// // console.log(dbFilter);

// // body: JSON.stringify({
// //     city: Data.city,
// //     area: Data.area,
// //     item: Data.item,
// //   }),

// //   body: JSON.stringify({
// //     city: {} Data.city,
// //     area: Data.area,
// //     item: Data.item,
// //   }),
// const city = "서울시";
// const area = "독산동";

// const db = {
//   서울시: {
//     가산동: [
//       { item: "모자", price: "10000" },
//       { item: "모자", price: "10000" },
//     ],
//     독산동: [
//       { item: "수박", price: "10000" },
//       { item: "수박", price: "10000" },
//     ],
//   },
// };

// // console.log(db[city][area]);
// // db[서울시][가산동];

// const test = JSON.stringify([
//   { item: "모자", price: "10000" },
//   { item: "모자", price: "10000" },
// ]);

// // 서버 처리

// const testjson = test.json();
// console.log(testjson);

// // test.forEach((index) => {
// //   console.log(index);
// // });

// import { Link } from "react-router-dom";
// import { postJWT } from "../api";
// import {
//   TitleText,
//   Button,
//   Input,
//   CenterDiv,
//   SignUpButton,
//   SignButton,
// } from "../style/styled";


// export default function Login() {
//   const onSubmit = (e) => {
//     console.log("login");
//     e.preventDefault();
//     const id = e.target.id.value;
//     const password = e.target.password.value;
//     const data = "/auth/login";
//     const props = { path: data, userEamil: id, userPassword: password };
//     postJWT(props);
//     console.log(id, password);
//   };
//   return (
//     <>
//       <CenterDiv
//         width="400px"
//         height="500px"
//         backgroundColor="#282828"
//         borderRadius="5px"
//       >
//         <TitleText color="coral">Login</TitleText>
//         <p />
//         <form method="post" onSubmit={onSubmit}>
//           <Input
//             width="228px"
//             fontSize="16px"
//             name="id"
//             id="id"
//             type="text"
//             placeholder="아이디"
//           />
//           <p />
//           <Input
//             width="228px"
//             fontSize="16px"
//             name="password"
//             id="password"
//             type="text"
//             placeholder="비밀번호"
//           />
//           <p />
//           <SignButton width="110px" type="submit">
//             로그인
//           </SignButton>
//         </form>
//         <p />
//         <Link to="/signup">
//           <SignUpButton width="110px">회원가입</SignUpButton>
//         </Link>
//         <p />
//         <Button width="230px">구글로 로그인</Button>
//         <p />
//         <Button width="230px">카카오로 로그인</Button>
//         <p />
//         <Link
//           to="/"
//           style={{
//             textDecoration: "none",
//             color: "	#7BA87B	",
//             fontWeight: "bold",
//           }}
//         >
//           비밀번호를 잊어버리셨나요?
//         </Link>
//       </CenterDiv>
//     </>
//   );
// }
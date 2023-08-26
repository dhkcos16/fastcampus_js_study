import _ from "lodash"; // from "node_modules"
import checkType from "./getType"; // import 네이밍 맘대로 지어도 상관 없다.
import { random, user as happyUser } from "./getRandom"; // export default가 아닌 named export의 경우, {}로 감싸서 가져온다.
import * as QWER from "./getRandom"; // 한번에 가져오기 !

// export default: 한 번만 내보낼 때 사용
// export named: 마구마구 내보낼 때 사용

console.log(_.camelCase("Hello world from south korea."));
console.log(checkType([1, 2, 3]));
console.log(random(), random());
console.log(happyUser);
console.log(QWER); // 한번에 가져오면 함수는 메소드로 가져오게 된다.

console.log("----------");
// **
// lodash 사용법
// 1. _.uniqBy(): 이미 중복이 발생한 데이터에서 (데이터가 1개 일 때), 중복을 제거
// 2. _.unionBy(): 아직 합치기 전에 (데이터가 여러 개 일 때), 고유하게 합칠 수 있다.
// 3. _.find()
// 4. _.findIndex()
// 5. _.remove()
// **

const usersA = [
  { userId: "1", name: "Donghwi" },
  { userId: "2", name: "Neo" },
];

const usersB = [
  { userId: "1", name: "Donghwi" },
  { userId: "3", name: "Amy" },
];
const usersC = usersA.concat(usersB);
console.log("concat: ", usersC);
console.log("uniqBy: ", _.uniqBy(usersC, "userId")); // 1. ( 중복된 데이터가 있는 배열 ) 2. ( 중복을 구분할 "속성명" )

const usersD = _.unionBy(usersA, usersB, "userId"); // ( 합치기 전 데이터1 ) , ( 합치기 전 데이터2 ), ( 속성명 )
console.log("unionBy: ", usersD);

console.log("----------");

const users = [
  { userId: "1", name: "Donghwi" },
  { userId: "2", name: "Neo" },
  { userId: "3", name: "Amy" },
  { userId: "4", name: "Suri" },
  { userId: "5", name: "Noel" },
];

const foundUser = _.find(users, { name: "Amy" }); // ( 검색할 데이터 ) ( 데이터를 찾을 기준의 key: value )
const foundUserIndex = _.findIndex(users, { name: "Amy" });
console.log(foundUser); // 찾고자 하는 배열 데이터에서 해당하는 객체 데이터{}가 모두 출력된다.
console.log(foundUserIndex); // 찾고자 하는 배열 데이터에 해당하는 순서가 number로 출력된다.

_.remove(users, { name: "Donghwi" });
console.log(users);

console.log("----------");
// **
// JSON (Javascript Obejct Notation)
// 자바스크립트의 객체 표기법
// JSON은 문자 데이터임 => 가져오면 자동으로 객체 데이터로 변경된다.
// **

import myData from "./myData.json";

// json 파일 가져옴
console.log(myData);

const user = {
  name: "dong9ri",
  age: 30,
  email: ["dhkcos16@gmail.com", "timeseller9@naver.com"],
  address: ["Korea"],
};

// 문자 데이터화
const str = JSON.stringify(user);
console.log("str: ", str);

// json 파일화 === json 파일
const obj = JSON.parse(str);
console.log("obj: ", obj);

console.log("----------");
// **
// F12 > Application > 저장용량 > 스토리지 (키와 값으로 저장됨)
// 로컬 스토리지: 데이터 만료되지 않음, 일반적인 상황에서 유용하다.
// 세션 스토리지: 세션이 바뀌면 데이터 만료됨 (사라짐)
// **

// 로컬 데이터로 저장할 때, 문자 데이터화 시켜서 쏴야 함
localStorage.setItem("myCat", "Tom"); // 저장
const cat = localStorage.getItem("myCat"); // 확인
localStorage.removeItem("myCat"); // 삭제

// localStorage.setItem("user", JSON.stringify(user));
// console.log(JSON.parse(localStorage.getItem("user")));
obj.age = 22;
console.log(obj);

localStorage.setItem("user", JSON.stringify(obj));

// **
// lowdb를 활용해서 스토리지 관리하기 ! (lodash 기반)
// **

// **
// OMDb api
// **

// **
// Query String
// 주소?속성=값&속성=값&속성=값
// **

console.log("----------");
// **
// axios
// **

import axios from "axios";

function fetchMovies() {
  axios.get("https://www.omdbapi.com/?apikey=7035c60c&s=frozen").then((res) => {
    console.log(res);
    const h1El = document.querySelector("h1");
    const imgEl = document.querySelector("img");
    h1El.textContent = res.data.Search[0].Title;
    imgEl.src = res.data.Search[0].Poster;
  });
}
fetchMovies();

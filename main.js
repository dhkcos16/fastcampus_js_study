import random from "./getRandom";
import _ from "lodash";

// 조건문 switch

const a = random();

switch (a) {
  case 0:
    console.log("a는 0이다");
    break;
  case 2:
    console.log("a는 2이다");
    break;
  case 4:
    console.log("a는 4이다");
    break;
  default:
    console.log("a는 나머지야...");
}

// 반복문 for

const ulEl = document.querySelector("ul");

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement("li");
  li.textContent = `list-${i + 1}`;
  if ((i + 1) % 2 === 0) {
    li.addEventListener("click", function () {
      console.log(li.textContent);
    });
  }
  ulEl.appendChild(li);
}

// 변수의 유효 범위 var:함수레벨 / const,let:블록레벨

// 형 변환 : 동등 연산자(==), if문 () 사용 시 발생 ...
// 참 같은 값(Truthy)
// true, {}, [], 1, 2, 'false', -12, '3.14', ...

// 거짓 같은 값(Falsy)
// false, '', null, undefined, 0, -0, NaN

// 화살표 함수

const double = function (x) {
  return x * 2;
};
const doubleArrow = (x) => x * 2;
const doubleArrowObj = (x) => ({
  // ()로 한번 감싸야 객체 데이터 담을 수 있음
  name: "donghwi",
});

// console.log("double: ", double(7));
// console.log("doubleArrow: ", doubleArrow(7));
// console.log("doubleArrowObj: ", doubleArrowObj());

// 즉시실행함수 IIFE (immediately-Invoked Function Express)
// ()() or (())

// 호이스팅 - 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// function 함수명(){} - 함수 선언 시, 최상단으로 끌어올려지므로 최하단에 function만 관리하면 편하다

// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후에 함수 실행
// setInterval(함수, 시간): 일정 시간 간격마다 함수 실행
// clearTimeout()
// clearInterval()

// const timer = setTimeout(() => {
//   console.log("dhkk");
// }, 2000);

// const interval = setInterval(() => {
//   console.log("dhk");
// }, 3000);

const h1El = document.querySelector("h1");

h1El.addEventListener("click", () => {
  clearTimeout(timer);
});

h1El.addEventListener("click", () => {
  clearInterval(interval);
});

// ***
// 콜백 함수: 인수로 처리되는 함수. 콜백은 실행 위치를 보장한다.
//            기존 함수 처리가 완료된 시점에, 콜백 함수가 추가적으로 처리 됨
// ***

function timeout(callback) {
  // 2. 콜백함수 인수 생성
  setTimeout(() => {
    console.log("dhkkk");
    callback(); // 3. 콜백함수 실행문 삽입
  }, 3000);
}
timeout(function () {
  // 1. 익명함수 추가
  console.log("done");
});

// ***
// 생성자 함수
// ***

const donghwi = {
  // 속성과 메소드를 통틀어 맴버(Member)라고 부른다.
  firstName: "Donghwi", // 속성
  lastName: "Kim", // 속성
  getFullName: function () {
    // 메소드
    return `${this.firstName} ${this.lastName}`;
  },
};
// console.log(donghwi.getFullName());

function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// 인스턴스들 (donghwii, amy, neo)
const donghwii = new User("Donghwi", "Kim");
const amy = new User("Amy", "Clarke");
const neo = new User("Neo", "Smith");

// console.log(donghwii.getFullName());
// console.log(amy);
// console.log(neo);

// ***
// this
// ***

// 일반(Function) 함수는 호출 위치에 따라 this를 정의 !
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this를 정의 !

const heropy = {
  name: "Heropy",
  normal: function () {
    // `: function`은 생략 가능 !! 즉, normal() {}로 표현 가능하다.
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};
// heropy.normal();
// heropy.arrow();

const ami = {
  name: "ami",
  normal: heropy.normal, // 호출하는 게 아니라 [ ()없으니까 ], data를(함수를) 가져온다
  arrow: heropy.arrow, // 호출하는 게 아니라 [ ()없으니까 ], data를(함수를) 가져온다
};
// ami.normal();
// ami.arrow();

// this 예제 2

const timer2 = {
  name: "timer",
  timeout: function () {
    setTimeout(() => {
      // 일반(Function) 함수로 생성 시, undefined로 나옴... 화살표 함수로 해야 name이 표시된다.
      // 화살표 함수를 감싸고 있는 함수 범위가 있기 때문에, this가 정의됨 !!! this = timer2라는 객체 데이터가 됨
      console.log(this.name);
    }, 2000);
  },
};
// timer2.timeout(); // 2초 뒤에 timer <--- 화살표 함수가 선언된 함수 범위에 name 가져왔기 때문

// ***
// ES6 classes
// ***

// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

class User2 {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const dhk2 = new User2("Donghwi", "Kim");
const amy2 = new User2("Amy", "Clarke");
const neo2 = new User2("Neo", "Smith");

// console.log(dhk2);
// console.log(amy2.getFullName());
// console.log(neo2.getFullName());

// ***
// 생성자 함수 상속(확장)
// ***

class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}
const myVehicle = new Vehicle("운송수단", 2);
// console.log(myVehicle);

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel);
  }
}

const myBicycle = new Bicycle("삼천리", 2);
const daughtersBicycle = new Bicycle("세발", 3);
// console.log(myBicycle);
// console.log(daughtersBicycle);

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel);
    this.license = license;
  }
}

const myCar = new Car("벤츠", 4, true);
const daughtersCar = new Car("포르쉐", 4, false);
// console.log(myCar);
// console.log(daughtersCar);

// ***
// 문자열 데이터
// ***

const str = "dhkcos16@gmail.com";
const str2 = "    Hello    ";

console.log(str.match(/.+(?=@)/)[0]); // dhkcos16
// console.log(str2.trim());

// ***
// 숫자 데이터
// ***

// toFixed(number) 소수점 *번째 자리까지 남기고 버리기
// parseInt(str) 정수로 숫자 변환
// parseFloat(str) 소수점자리까지 숫자로 변환

// console.log("abs: ", Math.abs(-12)); // 절대값
// console.log("min: ", Math.min(2, 8));
// console.log("max: ", Math.max(2, 8));
// console.log("ceil: ", Math.ceil(3.14)); // 올림
// console.log("floor: ", Math.floor(3.14)); // 내림
// console.log("round: ", Math.round(3.14)); // 반올림
// console.log("round: ", Math.round(3.54));
// console.log("random: ", Math.random());

// ***
// 배열 데이터
// ***

const arr1 = [5, 8, 12, 130, 44];
const numbers = [1, 2, 3, 4];
const fruits = ["Apple", "Banana", "Mango"];

// console.log(arr1.find((element) => element > 10));
// 판별1. (element = 5 > 10) false / 판별2. (element = 8 > 10) false / 판별3. (element = 12 > 10) true 종료!
// 결론적으로 12를 반환

// concat() 기존 배열 유지하고 새로운 배열 (합쳐진) 생성
// console.log(numbers.concat(fruits));

// ***
// forEach() 콜백 함수 반복하는데 반환 되는 값은 없다.
// ***
const b = fruits.forEach((fruit, i) => {
  return `${fruit}-${i}`;
});
// console.log(b); // undefined

// ***
// map() 콜백 데이터의 내부 반환된 값 있음 => 새로운 배열 생성
// ***

const c = fruits.map((fruit, i) => ({
  id: i,
  name: fruit,
}));
// console.log(c); // (3) [{}, {}, {}]

// 화살표 함수 return {} 삭제하는 대신에 ({}) 안에 데이터 넣어줘야 한다.

// ***
// filter() "true"로 반환되는 데이터만 새로운 배열에 데이터로 넣어준다.
// ***

const d = numbers.map((number) => number < 3);
// console.log(d); // [true, true, false, false]

const e = numbers.filter((number) => number < 3);
// console.log(e); // [1,2]

// ***
// find(), findIndex() : 반복 돌려서 찾으면 find 함수는 종료되고, 찾은 데이터 값을 반환한다.
// ***

const f = fruits.find((fruit) => /^B/.test(fruit));
// console.log(f); // Banana

const g = fruits.findIndex((fruit) => /^M/.test(fruit));
// console.log(g); // 2

// ***
// includes() 배열에 인수가 포함되어 있으면 true, 아니면 false 반환
// ***

// ***
// 원본 배열 수정됨 주의 !!
// push(), unshift()
// reverse()
// splice() : (시작 인덱스, 지울 갯수, 추가될 인수)
// ***

// **
// object 생성자 속성
// 정적 메소드 === Object.method()
// 배열, 객체 뒤에 직접적으로 사용 불가능 !! [].assign(X)
// **

// **
// Object.assign()
// **

const target = { a: 4, b: 5 };
const source = { b: 10, c: 43 };

const returnedTarget = Object.assign(target, source); // ( 대상 객체, 출처 객체 ) 원본 객체 데이터 수정됨 !!

// console.log(target); // { a:4, b: 10, c: 43 }
// console.log(returnedTarget); // { a:4, b: 10, c: 43 }
// console.log(target === returnedTarget); // true 실제로 동일한 데이터임

const h = { g: 100 };
const i = { g: 100 };
// console.log(h === i); // false 다른 메모리 주소를 가리키고 있기 때문에...

// 불변성과 가변성
// 하나의 객체 데이터는 메모리 주소에 값이 저장 됨
// -> 변수(객체를 담고 있는)는 메모리 주소에 있는 내용만 참고함
// -> target과 returnedTarget은 같은 메모리 주소를 가리키고 있기 때문에
// -> 일치 연산자로 비교 시, true를 반환한다.
// -> 참조형 데이터 : 객체, 배열, 함수가 대표적

const returnedTarget2 = Object.assign({}, target, source); // (대상 객체) == 빈 객체, (출처 객체) == target, source
// console.log(returnedTarget2); // 빈 객체에 복사해서 새로운 메모리 주소를 가리킴
// console.log(target === returnedTarget2); // false

// **
// Object.keys() 객체 데이터를 배열 데이터로 반환한다. key값으로 반환~
// **

const userInfo = {
  name: "dong9ri",
  age: 30,
  email: ["dhkcos16@gmail.com"],
  address: ["Korea"],
};
const keys = Object.keys(userInfo);
// console.log(keys); // ['name', 'age', 'email']
// console.log(userInfo["email"]); // "dhkcos16@gmail.com"

const values = keys.map((key) => userInfo[key]);
// console.log(values); // ["dong9ri", 30, "dhkcos16@gmail.com"]

// **
// 구조 분해 할당 (Destructuring assignment) === 비구조화 할당
// 원하는 부분만 추출해서 쓰기 편하다.
// 에러 뜨는 경우엔, userInfo.email로 콘솔 찍어본다.
// **

const { name: dhk, address = "USA" } = userInfo;
// 매개변수의 기본값을 줄 수 있는데, undefined일 경우에 이 기본값으로 대체된다.
// name이 싫다면, 매개변수로 사용할 변수명을 내 맘대로 줄 수 있다.

console.log(`사용자의 이름은 ${dhk} 입니다.`); // name 호출 시, 오히려 에러뜸
console.log(`사용자의 이메일 주소는 ${userInfo.email} 입니다.`); // 구조 분해 할당에 없을 경우, 기존 객체 데이터에서 뽑아오기
console.log(address); // 기본값은 무시되고, 구조 분해 할당 이전의 객체 데이터를 가져온다.

// **
// 배열 구조 분해 할당 시, 주의점 !!
// -> 배열 순서대로 할당되기 때문에 빈 공백과 쉼표를 넣어줘야 한다.
// **

const hamburger = ["nobrand", "lotteria", "burgerking"];
const [, , burger] = hamburger;
// console.log(burger); // burgerking

// **
// 전개 연산자 (spread)
// 쉼표로 구분된 각 아이템으로 배열 데이터가 전개되어 만들어 진다.
// ...fruits === fruits[0], fruits[1], fruits[2]
// 매개변수로 전개 연산자 사용하면, 배열로 들어감
// **

// console.log(...fruits); // Apple, Banana, Mango

function toObject(a, ...b) {
  return {
    a: a,
    b: b,
  };
}

// console.log(toObject(...fruits)); // { a: 'Apple', b: ['Banana', 'Mango'] }

// 축약형으로 만들기 --- a:a => a
const toObject2 = (a, ...b) => ({ a, b });

// console.log(toObject2(...fruits)); // { a: 'Apple', b: ['Banana', 'Mango'] }

// **
// 데이터 불변성 (Immutability)

// 원시 데이터: String, Number, Boolean, undefined, null,
// 원시 데이터들은 메모리 주소를 새로 파는 게 아니라, 기존에 존재하는 메모리 주소를 바라보도록 바꿔준다. == 불변성

// 참조형 데이터: Obejct, Array, function
// 참조형 개중요!!
// 개념 --- 참조형 데이터는 새로 만들 때마다, 새로운 메모리 주소에 할당 된다.
// 주의점1 --- 변수 a,b가 동일한 메모리 주소를 참조하고 있을 때, 둘 중 하나라도 값이 바뀌면 나머지 변수의 값도 "의도치 않게" 바뀌게 된다.
// 주의점2 --- 변수들을 별개로 구분해서 관리하기 위해서, 복사를 사용해서 분리해주는 게 좋다. (얕은 복사, 깊은 복사)

// **

// **
// 얕은 복사와 깊은 복사
// **

const copyUserInfo = userInfo; // 동일한 메모리 주소 가리킴
// console.log(copyUserInfo === userInfo); // true

userInfo.age = 22;

console.log("userInfo: ", userInfo);
console.log("copyUserInfo: ", copyUserInfo); // 의도치 않게 age가 변경된다.

// 얕은 복사 ㄱㄱ
const copyUserInfo2 = Object.assign({}, userInfo);
console.log(copyUserInfo2 === userInfo); // false

userInfo.age = 11;

console.log("userInfo: ", userInfo);
console.log("copyUserInfo2: ", copyUserInfo2); // 의도치 않게 age가 변경되는 것을 방지한다.

// 얕은 복사2 ㄱㄱ
const copyUserInfo3 = { ...userInfo };

userInfo.age = 99;

console.log("userInfo: ", userInfo);
console.log("copyUserInfo3: ", copyUserInfo3); // 의도치 않게 age가 변경되는 것을 방지한다. 222

console.log("---------");

// 얕은 복사 정리 ㄱㄱ

userInfo.email.push("never_enough@kakao.com"); // email을 배열 데이터로 가공 후에, push 가능...
console.log(userInfo.email === copyUserInfo3.email); // 왜 true로 나와??

// user.email 배열 데이터(참조형) 따로 복사처리 한 적은 없다.
// 위에서 한 것은 객체 데이터(참조형)을 따로 복사한 것일 뿐...
// 결과적으로, 참조형 데이터(객체) 안에 참조형 데이터(배열)는 같은 메모리 주소를 가리키고 있다.
// 즉, 얕은 복사에서는 참조형 데이터 내부의 참조형 데이터는 동일하게 복사된다.
// ex) 원본 객체에 push()하면, 얕은 복사 객체에도 push()되어 동일한 영향을 미친다.

console.log("---------");

// 깊은 복사 ㄱㄱㄱㄱ!!
// 순수 자바스크립트로 구현하기 어려워서, lodash로 구현 ㄱㄱ
// 원본 객체가 바뀌어도, 복사한 객체에 영향을 미치지 않는다. ( 깊은 복사된 시점에서 변화 X )
// cloneDeep : "재귀적"(반복적)으로 실행하면서 모든 값들을 복사 처리하고 있다.
// 즉, 가장 외부의 [], {} 껍데기만 복사한 게 아니라, 내부의 참조형 데이터도 꼼꼼하게 복사해서 새로운 메모리 주소에 할당한다.

const copyUserInfoDeep = _.cloneDeep(userInfo);

userInfo.email.push("timeseller9@naver.com");
console.log(userInfo.email === copyUserInfoDeep.email); // false --- 껍데기 뿐만 아니라 속까지 다르다.
console.log(userInfo.name === copyUserInfoDeep.name); // true --- 원시 데이터는 동일한 메모리 주소 가리킨다.
console.log(userInfo.address === copyUserInfoDeep.address); // false --- 참조형 데이터는 새로운 메모리 주소에 할당된다.

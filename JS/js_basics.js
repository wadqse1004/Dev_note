/*
=================================================================
자바스크립트(JavaScript) 기본 문법 (JavaScript Basics)
=================================================================

C#과 달리 '동적 타입(Dynamic Typing)' 언어라, 변수에 타입을 지정 X.
*/

// ---
// 1. 변수 (Variables)
// ---
// ES6(2015) 이전: var (함수 스코프, 호이스팅 문제)
// ES6 이후: let, const (블록 스코프, **권장**)

// 1-1. let: 변경 가능한 변수 (C#의 'int i = 10;' 이후 'i = 20;')
let age = 30;
age = 31; 
console.log("let age:", age);

// 1-2. const: 변경 불가능한 상수 (C#의 'const int MAX = 100;' 또는 'readonly')
const name = "홍길동";
// name = "김철수"; // Error: Assignment to constant variable.
console.log("const name:", name);

// 1-3. var (구식, 현재는 잘 사용 안 함)
// 함수 레벨 스코프를 가지며, 호이스팅(hoisting) 문제가 있음.
var x = 10;


// ---
// 2. 자료형 (Data Types) - 동적 타입
// ---
// C#처럼 'string s'나 'int i'로 선언하지 않는다. 값에 의해 타입이 결정.

let message = "Hello";     // String
let count = 100;         // Number (정수, 실수 모두 Number)
let isHappy = true;        // Boolean
let nothing = null;      // Null (값이 '없음'을 의도적으로 명시)
let notAssigned;           // Undefined (값이 할당되지 않음)
console.log("notAssigned:", notAssigned); // undefined 출력

// ---
// 3. 연산자 (Operators)
// ---
// C#, C언어와 거의 동일.
// 산술: +, -, *, /, %
// 논리: && (AND), || (OR), ! (NOT)

// C#과 다른 '중요한' 비교 연산자
// == (동등 연산자): '타입 변환' 후 비교 (값만 비교)
console.log("1" == 1);   // true (문자 '1'과 숫자 1을 같다고 판단)

// === (일치 연산자): '타입 변환 없이' 비교 (값과 타입 모두 비교)
console.log("1" === 1);  // false (타입이 다르므로 false)
// **버그를 줄이기 위해 항상 '==='를 사용하는 것을 권장.**


// ---
// 4. 제어문 (Control Flow)
// ---
// C#, C언어와 문법이 동일 (if, else if, else, switch, for, while)

console.log("\n--- 4. 제어문 (for) ---");
for (let i = 0; i < 3; i++) {
  console.log(i);
}

let score = 85;
if (score > 90) {
  console.log("A");
} else if (score > 80) {
  console.log("B"); // "B" 출력
} else {
  console.log("C");
}


// ---
// 5. 함수 (Functions)
// ---
// C#의 메서드와 같음. 'function' 키워드를 사용.
// 타입을 명시 X.

// 5-1. 함수 선언식
function add(a, b) {
  return a + b;
}
console.log("add(5, 3) =", add(5, 3)); // 8

// 5-2. 함수 표현식 (변수에 함수를 담음)
// C#의 'Func<int, int, int> multiply = (a, b) => a * b;'와 유사
const multiply = function(a, b) {
  return a * b;
};
console.log("multiply(5, 3) =", multiply(5, 3)); // 15


// ---
// 6. 객체 (Objects)
// ---
// C#의 'Dictionary<string, object>' 또는 'dynamic' 객체와 가장 유사.
// { key: value } 형태로 데이터를 저장.

const person = {
  name: "김철수",
  age: 30,
  // 객체 안의 함수 (메서드)
  greet: function() {
    // 'this'는 이 객체(person)를 가리킨다. (C#의 'this')
    console.log("안녕하세요, " + this.name + "입니다.");
  }
};

// 프로퍼티 접근 (C#과 동일)
console.log(person.name); // "김철수"
console.log(person["age"]); // 30 (문자열 key로 접근도 가능)

// 메서드 호출
person.greet();


// ---
// 7. 배열 (Arrays)
// ---
// C#의 'List<object>'와 유사.
// 여러 타입의 데이터를 한 배열에 담을 수 있다.

let fruits = ["사과", "바나나", "딸기"];
console.log(fruits[0]); // "사과"

// C#의 .Add()
fruits.push("오렌지"); 
console.log(fruits);

// C#의 .ForEach() 또는 LINQ
fruits.forEach(function(fruit) {
  console.log(fruit);
});
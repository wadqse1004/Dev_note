/*
=================================================================
자바스크립트(JavaScript) 고급 문법 (ES6+ / Modern JS)
=================================================================

자바스크립트 개발(React, Vue, Node.js)의 필수 문법.
C#에서 보던 편리한 기능(람다, async/await, 클래스)들이
자바스크립트에서도 표준화되었다.
*/

// ---
// 1. 화살표 함수 (Arrow Functions)
// ---
// C#의 람다 식('=>')과 100% 동일한 문법.
// 'function' 키워드를 축약하고 'this' 바인딩 방식을 단순화한다.

console.log("--- 1. 화살표 함수 ---");

// 기본 함수 (ES5)
const add_es5 = function(a, b) {
  return a + b;
};

// 화살표 함수 (ES6+)
// C#의 'Func<int, int, int> add_es6 = (a, b) => a + b;'
const add_es6 = (a, b) => a + b;
console.log("화살표 함수:", add_es6(10, 20)); // 30

// C#의 'Action<string> print = (msg) => Console.WriteLine(msg);'
const print = msg => console.log(msg); // 매개변수가 하나면 괄호 생략 가능
print("Hello Arrow Function!");


// ---
// 2. 템플릿 리터럴 (Template Literals)
// ---
// C#의 '문자열 보간(String Interpolation)' ($"...")과 동일.
// 백틱(``)을 사용하고, 변수는 ${} 안에 넣는다.

console.log("\n--- 2. 템플릿 리터럴 ---");
const username = "이영희";
const userAge = 25;

// C#의 '$"이름: {username}, 나이: {userAge}"'
const greeting = `이름: ${username}, 나이: ${userAge}`;
console.log(greeting);


// ---
// 3. 구조 분해 할당 (Destructuring)
// ---
// 객체나 배열의 속성을 꺼내어 개별 변수에 할당하는 문법.
// C# 7.0 이상의 'Tuple Destructuring' ('(string name, int age) = GetUser();')과 유사합니다.

console.log("\n--- 3. 구조 분해 할당 ---");

// 3-1. 객체 구조 분해
const user = {
  id: 1,
  email: "user@example.com",
  role: "Admin"
};
// C#의 'var id = user.id; var email = user.email;'
const { id, email } = user;
console.log(`ID: ${id}, Email: ${email}`);

// 3-2. 배열 구조 분해
const colors = ["Red", "Green", "Blue"];
const [firstColor, secondColor] = colors;
console.log(`1st: ${firstColor}, 2nd: ${secondColor}`);


// ---
// 4. 전개/나머지 연산자 (Spread/Rest Operators) '...'
// ---

console.log("\n--- 4. 전개/나머지 연산자 ---");

// 4-1. 전개 연산자 (Spread): 객체/배열 복사 (C#의 .ToList()나 new List(oldList))
const original = [1, 2, 3];
const copy = [...original, 4, 5]; // 1, 2, 3을 '펼쳐서' 새 배열 생성
console.log("Spread (copy):", copy);

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // obj1을 '펼쳐서' 새 객체 생성
console.log("Spread (object):", obj2);

// 4-2. 나머지 연산자 (Rest): 여러 인자를 배열로 받기 (C#의 'params')
// C#의 'public void Log(params string[] messages)'
function logMessages(type, ...messages) {
  console.log(`[${type}]`);
  messages.forEach(msg => console.log(` - ${msg}`));
}
logMessages("ERROR", "Null reference", "At line 10");


// ---
// 5. Promise (프로미스)
// ---
// C#의 'Task'와 동일한 개념.
// 비동기 작업(예: API 호출)의 최종 '성공(resolve)' 또는 '실패(reject)' 상태를 나타내는 객체.

console.log("\n--- 5. Promise (C#의 Task) ---");

// C#의 'public Task<string> FetchData()'
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 성공 시 C#의 'TaskCompletionSource.SetResult()'
      resolve("데이터 가져오기 성공!"); 
      // 실패 시 C#의 'TaskCompletionSource.SetException()'
      // reject("데이터 가져오기 실패...");
    }, 1000); // 1초 지연 시뮬레이션
  });
};

// C#의 'FetchData().ContinueWith(task => ...)'
fetchData()
  .then(message => {
    // 'resolve'가 호출되었을 때 (성공)
    console.log(message);
  })
  .catch(error => {
    // 'reject'가 호출되었을 때 (실패)
    console.error(error);
  })
  .finally(() => {
    // C#의 'ContinueWith(..., TaskContinuationOptions.Always)' (성공/실패 무관)
    console.log("Promise 작업 완료");
  });


// ---
// 6. async / await
// ---
// C#의 'async / await'와 동일한 문법과 개념.
// Promise(Task)를 더 쉽게 다룰 수 있게 해준다.

console.log("\n--- 6. async / await ---");

// C#의 'public async Task ProcessData()'
async function processData() {
  console.log("데이터 처리 시작...");
  try {
    // C#의 'string data = await FetchData();'
    // 'await'는 Promise가 'resolve'될 때까지 기다린다.
    const data = await fetchData(); 
    
    // await가 끝나야 이 코드가 실행됨
    console.log("async/await:", data); 
    return data;
  } catch (error) {
    console.error("async/await 에러:", error);
  }
}

// async 함수는 항상 Promise를 반환.
processData().then(() => console.log("async/await 처리 완료"));


// ---
// 7. 클래스 (Classes) (ES6)
// ---
// C#의 'class' 문법과 매우 유사.
// (내부적으로는 '프로토타입' 기반으로 동작하지만, 사용성은 C#과 비슷)
console.log("\n--- 7. 클래스 (Class) ---");

// C#의 'public class Person { ... }'
class Person {
  // C#의 'public Person(string name) { ... }'
  constructor(name) {
    this.name = name; // C#의 'this.Name = name;'
  }
  
  // C#의 'public void Greet() { ... }'
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// C#의 'var p = new Person("자바스크립트");'
const p = new Person("자바스크립트");
p.greet();

// 상속 (Inheritance)
// C#의 'class Developer : Person { ... }'
class Developer extends Person {
  constructor(name, skill) {
    super(name); // C#의 'base(name)'
    this.skill = skill;
  }
  
  code() {
    console.log(`${this.name} is coding in ${this.skill}`);
  }
}

const dev = new Developer("개발자", "React");
dev.greet(); // 부모 클래스 메서드
dev.code();  // 자식 클래스 메서드
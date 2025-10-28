/*
=================================================================
타입스크립트(TypeScript) 기본 문법 (TypeScript Basics)
=================================================================
*/

// ---
// 1. 기본 타입 (Basic Types)
// ---
// C#의 'int myVar = 10;' 대신 'let myVar: type = 10;' 형식을 사용.

let isDone: boolean = false;
let message: string = "Hello, TypeScript";

// C#과 다른 점: 
// C#은 'int', 'float', 'double' 등이 나뉘지만,
// TS는 모든 숫자를 'number' 타입 하나로 처리.
let decimal: number = 6;     // 정수
let hex: number = 0xf00d;    // 16진수
let floatNum: number = 6.5;  // 실수

// C#의 'object'나 'dynamic'과 유사한 타입들
let notSure: any = 4;        // 'any' 타입 (타입 검사 안 함, C#의 'dynamic'과 유사. 남용 금지)
notSure = "maybe a string instead";

let looselyTyped: unknown = 10; // 'unknown' 타입 (타입 검사 함, C#의 'object'와 유사. 'any'보다 안전)
// (unknown 타입은 C#의 'object'처럼 사용 전 타입 캐스팅이나 확인이 필요)

// C#의 'void'와 동일 (함수 반환 값이 없을 때)
function warnUser(): void {
  console.log("This is my warning message");
}


// ---
// 2. 배열 (Arrays)
// ---
// C#의 'int[]' 또는 'List<int>'와 유사.

// 방법 1: 타입[]
let list: number[] = [1, 2, 3];
// C#의 'int[] list = {1, 2, 3};'

// 방법 2: 제네릭(Generic) 배열 타입
let genericList: Array<number> = [1, 2, 3];
// C#의 'List<int> genericList = new List<int> {1, 2, 3};'


// ---
// 3. 튜플 (Tuple)
// ---
// C#의 'Tuple<string, int>' 또는 '(string, int)'와 동일.
// 순서와 타입, 개수가 고정된 배열.
let x: [string, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error


// ---
// 4. 함수 (Functions)
// ---

function add(a: number, b: number): number {
  return a + b;
}

let result: number = add(10, 20);

// 4-1. 선택적 매개변수 (Optional Parameters) '?'
// C#의 'string Greet(string name, string? title = null)'
function greet(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}`;
  } else {
    return `Hello, ${name}`;
  }
}
console.log(greet("Kim")); // "Hello, Kim"
console.log(greet("Park", "Mr.")); // "Hello, Mr. Park"

// 4-2. 기본 매개변수 (Default Parameters)
function greetDefault(name: string, title: string = "Mr."): string {
  return `Hello, ${title} ${name}`;
}
console.log(greetDefault("Lee")); // "Hello, Mr. Lee"


// ---
// 5. 객체 (Objects - 인라인 타입 정의)
// ---
// 간단한 객체의 타입을 즉석에서 정의할 수 있습니다.
// (C#의 익명 타입 'new { Id = 1, Name = "Tom" }'과 비슷하지만, TS는 타입을 강제)

let user: { id: number; name: string };

user = { id: 1, name: "Tom" }; // OK
// user = { id: 1, username: "Tom" }; // Error (속성 이름이 다름)

// 복잡한 객체는 'interface'나 'type'을 사용하는 것이 좋다.

// ---
// 6. 인터페이스 (Interfaces)
// ---
// C#의 'interface'와 동일.
// 객체의 '설계도' 또는 '모양(Shape)'을 정의.
// C#: interface IPerson { int Id { get; set; } string Name { get; set; } }

interface IPerson {
    readonly id: number; // 'readonly' (C#의 readonly 또는 { get; })
    name: string;
    age?: number;      // '?' (선택적 프로퍼티)
  }
  
  // 인터페이스 사용
  let person1: IPerson = {
    id: 1,
    name: "Kim"
    // age는 선택적이므로 없어도 OK
  };
  
  // person1.id = 2; // Error (readonly)
  
  
  // ---
  // 7. 클래스 (Classes)
  // ---
  // C#의 'class'와 거의 동일 (public, private, protected, readonly 지원)
  
  class Employee implements IPerson {
    // C#과 동일한 멤버 변수
    readonly id: number;
    name: string;
    private department: string; // private
  
    // C#의 생성자
    constructor(id: number, name: string, department: string) {
      this.id = id;
      this.name = name;
      this.department = department;
    }
    
    // C#의 메서드
    public getInfo(): string {
      return `${this.name} works in ${this.department}`;
    }
  
    // 팁: TS 생성자 단축 문법 (C#의 레코드(Record) 타입과 유사)
    // 'constructor(public name: string, private dept: string) {}'
    // 위처럼 쓰면 'this.name = name;' 등의 할당 코드를 생략 가능.
  }
  
  let emp1 = new Employee(1, "Park", "Engineering");
  console.log(emp1.getInfo());
  // console.log(emp1.department); // Error (private)
  
  
  // ---
  // 8. 제네릭 (Generics)
  // ---
  // C#의 'Generics' (<T>)와 동일한 개념.
  // 재사용 가능한 컴포넌트를 만들 때 사용.
  
  // C#: public T Identity<T>(T arg) { return arg; }
  function identity<T>(arg: T): T {
    return arg;
  }
  let outputStr = identity<string>("myString");
  let outputNum = identity<number>(100);
  
  // C#: public class Result<T> { public T Data { get; set; } }
  interface IResult<T> {
    success: boolean;
    data: T;
  }
  
  let numResult: IResult<number> = { success: true, data: 10 };
  let strResult: IResult<string> = { success: true, data: "User data" };
  
  
  // ---
  // 9. 유니언 타입 (Union Types) |
  // ---
  // 한 변수가 *여러 타입 중 하나*가 될 수 있음을 의미.
  
  let id: string | number;
  
  id = 101;     // OK (number)
  id = "User-101"; // OK (string)
  // id = false; // Error (boolean은 허용 안 됨)
  
  // 함수 매개변수에도 사용
  function printId(id: string | number) {
    // C#의 'if (id is string)'과 유사
    if (typeof id === "string") {
      console.log(id.toUpperCase());
    } else {
      console.log(id);
    }
  }
  
  
  // ---
  // 10. 타입 별칭 (Type Aliases)
  // ---
  // 'type' 키워드로 복잡한 타입에 새로운 이름을 붙여준다.
  // C#의 'using UserId = System.Int32;'와 비슷.
  
  type StringOrNumber = string | number;
  type UserRole = "Admin" | "User" | "Guest"; // 리터럴 타입
  type User = {
    id: StringOrNumber;
    role: UserRole;
  };
  
  let myId: StringOrNumber = "abc";
  let myRole: UserRole = "Admin";
  // let myRole2: UserRole = "Manager"; // Error (정의된 3개 중 하나여야 함)
  let anUser: User = { id: 123, role: "User" };
  
  
  // ---
  // 11. 열거형 (Enums)
  // ---
  // C#의 'enum'과 동일.
  enum Color {
    Red,    // 0
    Green,  // 1
    Blue    // 2
  }
  // C#: public enum Color { Red, Green, Blue }
  
  let c: Color = Color.Green;
  console.log(c); // 1 (기본적으로 숫자)
  
  // 문자열 기반 Enum도 가능
  enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }
  let dir: Direction = Direction.Up; // "UP"
  
  
  // ---
  // 12. async/await 와 Promise
  // ---
  // C#의 'async/await' 및 'Task<T>'와 동일한 개념.
  // TS(JS)에서는 C#의 'Task<T>' 대신 'Promise<T>'를 사용.
  
  // C#: public Task<string> FetchData() { ... }
  function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched!");
      }, 1000);
    });
  }
  
  // C#: public async Task ProcessData() { ... }
  async function processData() {
    try {
      // C#: string data = await FetchData();
      const data: string = await fetchData();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  processData();
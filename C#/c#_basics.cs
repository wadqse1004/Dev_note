/*
=================================================================
C# 문법 정리
=================================================================
C#은 Microsoft가 개발한 .NET 프레임워크(및 .NET Core/5+)에서 실행되는
강력한 '정적 타입(Static-Typed)' 객체 지향 언어.
*/

// ---
// 1. 기본 구조 (using, namespace, class, Main)
// ---

// using: C/C++의 #include, Python의 import와 같이 다른 네임스페이스의 코드를 가져옴
using System;
using System.Collections.Generic; // List, Dictionary 사용
using System.Linq;                // LINQ 사용
using System.Threading.Tasks;     // async/await (Task) 사용

// namespace: C++과 동일. 코드(클래스 등)를 논리적으로 그룹화하는 컨테이너
namespace CSharpBasics
{
    // class: C#의 모든 코드는 기본적으로 클래스 내부에 있어야 함
    class Program
    {
        // Main 메서드: C/C++과 마찬가지로 프로그램의 '진입점(Entry Point)'
        // 'static'은 인스턴스 없이 호출 가능함을 의미.
        static void Main(string[] args)
        {
            Console.WriteLine("--- C# 기본 문법 ---");

            // ---
            // 2. 변수와 자료형 (Variables & Data Types)
            // ---
            // C#은 '정적 타입' 언어: 변수 선언 시 타입을 '반드시' 명시해야 함

            // 기본 자료형 (Primitive Types)
            int age = 30;           // 정수 (System.Int32)
            string name = "홍길동";   // 문자열 (System.String)
            double pi = 3.14159;    // 실수 (System.Double)
            bool isDeveloper = true;  // 논리 (System.Boolean)
            char initial = 'K';     // 문자 (System.Char)

            // 'var' 키워드 (C# 3.0+): 타입 추론
            // 컴파일러가 대입되는 값을 보고 타입을 '자동'으로 결정 (JS의 let/const와 다름!)
            // C#의 'var'는 '정적 타입'입니다. 한 번 타입이 정해지면 바꿀 수 없음.
            var city = "Seoul"; // city는 'string' 타입으로 고정됨
                                // city = 123; // Error: Cannot implicitly convert type 'int' to 'string'

            Console.WriteLine($"\n--- 2. 변수 ---");
            Console.WriteLine($"이름: {name}, 나이: {age}, 도시: {city}");


            // ---
            // 3. 제어문 (Control Flow)
            // ---
            // C/C++/Java/JavaScript와 동일
            Console.WriteLine("\n--- 3. 제어문 ---");

            // if / else if / else
            if (age >= 30)
            {
                Console.WriteLine("30대입니다.");
            }
            else
            {
                Console.WriteLine("30대가 아닙니다.");
            }

            // for (반복문)
            for (int i = 0; i < 3; i++)
            {
                Console.WriteLine($"for 반복: {i}");
            }

            // while (반복문)
            int count = 0;
            while (count < 2)
            {
                Console.WriteLine($"while 반복: {count}");
                count++;
            }

            // switch (조건문)
            string fruit = "apple";
            switch (fruit)
            {
                case "apple":
                    Console.WriteLine("사과입니다.");
                    break;
                case "banana":
                    Console.WriteLine("바나나입니다.");
                    break;
                default:
                    Console.WriteLine("기타 과일입니다.");
                    break;
            }


            // ---
            // 4. 메서드 (Methods - 함수)
            // ---
            // [접근제한자] [반환타입] [메서드명]([매개변수타입] [매개변수명], ...)
            Console.WriteLine("\n--- 4. 메서드 호출 ---");
            int sum = Add(5, 10);
            Console.WriteLine($"Add(5, 10) = {sum}");

            PrintMessage("메서드 호출 테스트");


            // ---
            // 5. 클래스와 객체 (Class & Object) - 기본
            // ---
            // C#은 완벽한 객체 지향 언어.
            // 'new' 키워드로 클래스의 '인스턴스(객체)'를 생성.
            Console.WriteLine("\n--- 5. 클래스와 객체 ---");
            Person p1 = new Person("김철수", 35);
            p1.Greet();
        }

        // 4. 메서드 정의 (Main 메서드와 같은 클래스 내부에 정의 - static 필요)
        public static int Add(int a, int b)
        {
            return a + b;
        }

        public static void PrintMessage(string message)
        {
            Console.WriteLine(message);
        }
    }

    // 5. 클래스 정의
    public class Person
    {
        // 필드 (Fields) - 데이터를 저장
        private string _name;
        private int _age;

        // 생성자 (Constructor) - 객체 생성 시 호출
        public Person(string name, int age)
        {
            this._name = name;
            this._age = age;
        }

        // 메서드 (Method) - 기능을 수행
        public void Greet()
        {
            Console.WriteLine($"안녕하세요, {this._name}입니다. 나이는 {this._age}세입니다.");
        }
    }
}

namespace CSharpAdvanced
{
    class AdvancedFeatures
    {
        static async Task Main(string[] args)
        {
            Console.WriteLine("--- C# 고급 문법 ---");

            // --- 6. 프로퍼티 (Properties) ---
            // C#의 핵심. 'get', 'set' 접근자를 통해 필드(데이터)를 캡슐화.
            Console.WriteLine("\n--- 1. 프로퍼티 (Properties) ---");
            Student s = new Student();
            s.Name = "이영희";   // 'set' 호출
            s.Age = 25;         // 'set' 호출 (100 미만이라 성공)
            // s.Age = 150;     // 'set' 호출 (Exception 발생)
            s.SchoolName = "CSharp University"; // 자동 구현 프로퍼티

            Console.WriteLine($"이름: {s.Name}, 나이: {s.Age}, 학교: {s.SchoolName}");
            // s.Id; // Error: get 접근자가 private


            // --- 7. 람다 식 (Lambda Expressions) '=>' ---
            // JS/TS의 화살표 함수와 동일. 익명 함수를 간결하게 표현.
            // C# 3.0부터 도입, LINQ와 함께 핵심 기능이 됨.
            Console.WriteLine("\n--- 2. 람다 식 (Lambda) ---");
            // Func<매개변수1, 매개변수2, 반환타입>
            Func<int, int, int> add = (a, b) => a + b;
            Console.WriteLine($"람다 (Func): {add(10, 5)}");

            // Action<매개변수> (반환값이 void일 때)
            Action<string> print = msg => Console.WriteLine(msg);
            print("람다 (Action) 호출");


            // --- 8. LINQ (Language Integrated Query) ---
            // C# 3.0의 혁신. JS의 map/filter/reduce 등을 C#에서 훨씬 이전에 구현.
            // 컬렉션(배열, 리스트 등)을 SQL처럼 쉽게 쿼리(조회/조작)함.
            Console.WriteLine("\n--- 3. LINQ ---");
            List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

            // 3-1. 메서드 구문 (Method Syntax) - (JS/TS의 .filter().map()과 유사)
            var evenSquares = numbers
                                .Where(n => n % 2 == 0) // 짝수만 필터링 (JS/TS의 filter)
                                .Select(n => n * n);      // 제곱 (JS/TS의 map)

            Console.WriteLine("LINQ (메서드 구문): " + string.Join(", ", evenSquares));

            // 3-2. 쿼리 구문 (Query Syntax) - (SQL과 유사)
            var oddNumbers = from n in numbers
                             where n % 2 != 0
                             orderby n descending
                             select n;

            Console.WriteLine("LINQ (쿼리 구문): " + string.Join(", ", oddNumbers));


            // --- 9. 제네릭 (Generics) <T> ---
            // TS의 <T>와 100% 동일. 타입을 파라미터화하여 재사용성을 높임.
            // C# 2.0부터 도입, List<T>, Dictionary<TKey, TValue>가 대표적.
            Console.WriteLine("\n--- 4. 제네릭 (Generics) ---");
            Console.WriteLine(Utilities.AreEqual<int>(5, 5));       // True
            Console.WriteLine(Utilities.AreEqual<string>("A", "B")); // False


            // --- 10. async / await (비동기 프로그래밍) ---
            // C# 5.0의 혁신. JS/TS의 async/await가 여기서 영향을 받음.
            // 'Task' (JS의 Promise)를 사용하여 비동기 코드를 동기 코드처럼 쉽게 작성.
            // Winform/WPF에서 UI가 멈추지 않게(Non-Blocking) 하는 데 필수.
            Console.WriteLine("\n--- 5. async / await ---");
            Console.WriteLine("비동기 작업 시작...");
            string result = await FetchDataAsync(); // 2초 대기 (하지만 Main 스레드는 멈추지 않음)
            Console.WriteLine(result);
            Console.WriteLine("비동기 작업 완료.");


            // --- 11. 델리게이트 (Delegate)와 이벤트 (Event) ---
            // 델리게이트: C/C++의 함수 포인터, JS/TS의 콜백 함수. 메서드(함수)에 대한 참조.
            // 이벤트: 델리게이트를 기반으로 한 '발행/구독' 패턴.
            // (Winform의 Button.Click이 '이벤트')
            Console.WriteLine("\n--- 6. 델리게이트와 이벤트 ---");
            Button myButton = new Button();

            // 람다 식을 이용해 'Click' 이벤트 '구독' (이벤트 핸들러 등록)
            myButton.Click += (sender, args) =>
            {
                Console.WriteLine("버튼 클릭됨! (이벤트 핸들러 실행)");
            };

            // 이벤트 '발행'
            myButton.TriggerClick();
        }

        // --- 12. async/await 메서드 정의 ---
        public static Task<string> FetchDataAsync()
        {
            // C#의 Task는 JS/TS의 Promise
            return Task.Run(() =>
            {
                Task.Delay(1000).Wait(); // 1초간 작업 시뮬레이션
                return "데이터 수신 완료!";
            });
        }
    }

    // --- 1. 프로퍼티 예제 클래스 ---
    public class Student
    {
        private Guid _id;
        private string _name; // backing field
        private int _age;

        // 1-1. 전체 프로퍼티 (Backing Field 사용)
        public int Age
        {
            get { return _age; } // 필드 값 읽기
            set // 필드 값 쓰기
            {
                // set 접근자에서 유효성 검사 수행
                if (value < 0 || value > 100)
                {
                    throw new ArgumentOutOfRangeException("Age", "나이는 0에서 100 사이여야 합니다.");
                }
                _age = value;
            }
        }

        // 1-2. 읽기 전용 프로퍼티 (get만)
        public Guid Id { get { return _id; } }
        // private set; // (private set; 으로 클래스 내부에서만 수정 가능하게 할 수도 있음)

        // 1-3. 자동 구현 프로퍼티 (C# 3.0+)
        // 컴파일러가 'backing field'를 자동으로 만듦 (가장 많이 사용)
        public string Name { get; set; }
        public string SchoolName { get; private set; } // set은 private

        public Student() { _id = Guid.NewGuid(); }
    }

    // --- 4. 제네릭 예제 클래스 ---
    public static class Utilities
    {
        // 제네릭 메서드 (C# 2.0+)
        public static bool AreEqual<T>(T a, T b) where T : IComparable
        {
            return a.CompareTo(b) == 0;
        }
    }

    // --- 6. 델리게이트/이벤트 예제 클래스 ---
    public class Button
    {
        // 1. 델리게이트 선언 (이벤트 핸들러의 '설계도')
        // (System.EventHandler를 쓰는 것이 표준)
        public delegate void ClickHandler(object sender, EventArgs args);

        // 2. 이벤트 선언 ('Click' 이벤트)
        public event ClickHandler Click;

        // 3. 이벤트 발행(Trigger) 메서드
        public void TriggerClick()
        {
            // 이벤트 핸들러가 등록되어 있는지 확인 (Click != null)
            // '?'는 Null-Conditional Operator (C# 6.0+)
            Click?.Invoke(this, EventArgs.Empty);
        }
    }
}
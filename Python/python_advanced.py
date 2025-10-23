# =================================================================
# 파이썬 고급 문법 요약 (Python Advanced Syntax)
# =================================================================

import time # 5번 데코레이터 예제에서 사용
import os   # 7번 with문 예제에서 사용

# ---
## 1. 리스트 컴프리헨션 (List Comprehensions)
# ---
# for 루프와 if문을 한 줄로 압축하여 리스트를 생성
# C#의 LINQ와 유사한 간결함을 제공합
# (예: var squares = Enumerable.Range(0, 10).Where(x => x % 2 == 0).Select(x => x * x).ToList();)

print("\n--- 1. 리스트 컴프리헨션 ---")

# 일반적인 C 스타일 또는 기본 Python 방식
squares = []
for x in range(10):
    if x % 2 == 0:
        squares.append(x * x)
print(f"일반 방식: {squares}")

# 리스트 컴프리헨션
# [표현식 for 항목 in 리스트 if 조건]
squares_comp = [x * x for x in range(10) if x % 2 == 0]
print(f"컴프리헨션: {squares_comp}")

# 딕셔너리 컴프리헨션
# {Key: Value for ...}
dict_comp = {x: str(x) for x in range(5)}
print(f"딕셔너리 컴프리헨션: {dict_comp}")


# ---
## 2. 람다 (Lambda), map, filter
# ---
# 람다(Lambda): 이름 없는 한 줄짜리 익명 함수.
#   C#의 람다 식 (x => x + 10)과 거의 동일
# map(함수, 리스트): 리스트의 모든 요소에 함수를 적용.
#   C# LINQ의 .Select()와 같다.
# filter(함수, 리스트): 함수가 True를 반환하는 요소만 필터링.
#   C# LINQ의 .Where()와 같다.

print("\n--- 2. 람다, map, filter ---")
nums = [1, 2, 3, 4, 5]

# 1. 람다 (Lambda)
# C#의 'Func<int, int> add_ten = x => x + 10;'
add_ten = lambda x: x + 10
print(f"람다 함수 결과: {add_ten(5)}") # 15

# 2. map (C#의 .Select())
# nums.Select(x => x * 2)
doubled = list(map(lambda x: x * 2, nums))
print(f"map 결과 (Select): {doubled}")

# 3. filter (C#의 .Where())
# nums.Where(x => x % 2 == 0)
evens = list(filter(lambda x: x % 2 == 0, nums))
print(f"filter 결과 (Where): {evens}")


# ---
## 3. 제너레이터 (Generators)와 yield
# ---
# C#의 'IEnumerable<T> MyMethod() { yield return ...; }'와 100% 동일한 개념.
# 함수가 값을 반환할 때 'return' 대신 'yield'를 사용하면, 함수는 제너레이터가 된다.
# 'yield'는 값을 반환하고 함수의 상태를 "일시 중지"시킴.
# 대용량 데이터를 메모리에 한 번에 올리지 않고, 필요할 때마다 하나씩 생성(lazy evaluation)할 때 사용.

print("\n--- 3. 제너레이터 (yield) ---")

def count_up_to(n):
    print("  [제너레이터 시작]")
    i = 0
    while i < n:
        yield i  # 여기서 값을 반환하고 멈춤 (C#의 yield return i;)
        i += 1
        print(f"  [제너레이터 {i} 생성]")

# 1. 제너레이터 객체 생성 (아직 함수 본문이 실행되지 않음)
counter_gen = count_up_to(3)
print(f"제너레이터 객체: {counter_gen}")

# 2. for 루프에서 제너레이터를 호출 (이때 코드가 실행됨)
# C#의 'foreach (var num in count_up_to(3))'와 동일
for num in counter_gen:
    print(f"받은 값: {num}")


# ---
## 4. 클래스 (Classes) - OOP
# ---
# C#과 같은 객체 지향 언어지만 문법 차이가 큼.
#
# 1. '__init__' (초기화 메서드): C#의 "생성자(Constructor)".
# 2. 'self': C#의 "this" 키워드와 같다.
#    - 파이썬에서는 모든 인스턴스 메서드의 *첫 번째 매개변수*로 'self'를 *명시적*으로 선언해야 한다.
#    - 호출 시에는 'self'를 전달X. (p1.greet()처럼)

print("\n--- 4. 클래스 (OOP) ---")

class Person:
    # C#의 생성자: public Person(string name, int age)
    def __init__(self, name, age):
        # C#의 this.name = name;
        self.name = name
        self.age = age
        print(f"  ({self.name} 객체 생성됨 - __init__ 호출)")

    # 인스턴스 메서드 (C#의 public void Greet())
    def greet(self):
        # C#의 this.name, this.age
        print(f"  안녕하세요, {self.name}입니다. 나이는 {self.age}세입니다.")

# 인스턴스 생성 (new 키워드 없음)
# C#의 'Person p1 = new Person("김철수", 30);'
p1 = Person("김철수", 30)

# 메서드 호출
p1.greet()


# ---
## 5. 데코레이터 (Decorators) @
# ---
# 다른 함수를 "감싸서(wrapping)" 추가 기능을 부여하는 함수(기능).
# C#의 'Attribute' ([ ])와 외형은 비슷하지만, 작동 원리는 "고차 함수(Higher-Order Function)"에 기반한다.
# (함수를 인자로 받고, 함수를 반환하는 함수)
# AOP(관점 지향 프로그래밍)를 구현할 때 사용. (예: 로깅, 실행 시간 측정, 트랜잭션 처리)

print("\n--- 5. 데코레이터 ---")

# 1. 데코레이터 함수 정의 (함수를 인자로 받음)
def timer_decorator(original_function):
    # 2. 원본 함수를 감쌀 'wrapper' 함수 정의
    # *args, **kwargs는 원본 함수가 어떤 인자를 받든 모두 처리하겠다는 의미
    def wrapper(*args, **kwargs):
        start_time = time.time()       # (기능 추가) 함수 실행 전
        
        result = original_function(*args, **kwargs) # (핵심) 원본 함수 실행
        
        end_time = time.time()         # (기능 추가) 함수 실행 후
        print(f"  ['{original_function.__name__}' 실행 시간: {end_time - start_time:.4f}초]")
        
        return result # 원본 함수의 반환값을 그대로 반환
    
    # 3. 감싸진(wrapping된) 함수를 반환
    return wrapper


# 4. @ 키워드를 사용해 데코레이터 적용
# @timer_decorator는
# 'some_task = timer_decorator(some_task)'와 동일한 의미.
# C#의 [TimerAspect] Attribute와 유사한 효과

@timer_decorator
def some_task(delay):
    print(f"  ... {delay}초 대기하는 작업 수행 ...")
    time.sleep(delay)
    print("  ... 작업 완료!")
    return "작업 결과물"

# 데코레이터가 적용된 함수 호출
task_result = some_task(0.5)
print(f"  작업 반환값: {task_result}")


# ---
## 6. *args 와 **kwargs (가변 인자)
# ---
# 함수를 정의할 때, 정해지지 않은 개수의 인자를 받을 때 사용.
# C#의 'params' 키워드(배열로 받음)와 유사하지만, 두 종류로 나뉜다.

# 1. *args (Arguments):
#    - 여러 개의 *위치 인자(positional argument)*를 *튜플(Tuple)*로 묶어서 받는다.
#    - C#의 'params object[] args'와 가장 유사.

# 2. **kwargs (Keyword Arguments):
#    - 여러 개의 *키워드 인자(keyword argument)*를 *딕셔너리(Dictionary)*로 묶어서 받는다.
#    - (예: name="홍길동", age=30) C#에는 직접적인 대응 기능이 없다.

print("\n--- 6. *args, **kwargs ---")

def demo_func(required_arg, *args, **kwargs):
    print(f"  필수 인자: {required_arg}")
    
    # *args는 튜플입니다.
    print(f"  *args (튜플): {args}")
    
    # **kwargs는 딕셔너리입니다.
    print(f"  **kwargs (딕셔너리): {kwargs}")

# C#의 'DemoFunc("첫째", "둘째", "셋째");'는 *args로 처리
# C#에서 **kwargs를 구현하려면 'DemoFunc("첫째", new Dictionary<string, object>{ {"id", 123}, {"job", "dev"} });'
demo_func("첫째", 
          "둘째", "셋째",      # 이 값들이 *args 튜플이 됨 -> ("둘째", "셋째")
          id=123, job="developer") # 이 값들이 **kwargs 딕셔너리가 됨 -> {'id': 123, 'job': 'developer'}


# ---
## 7. 컨텍스트 매니저 (Context Manager) 'with'
# ---
# C#의 'using' 문과 100% 동일한 개념.
# 파일 핸들링, DB 커넥션, 락(Lock) 등 자원을 사용한 뒤,
# 예외(Exception)가 발생하든 안 하든 *항상 안전하게 자원을 해제(close/release)*하는 것을 보장한다.
# (내부적으로 try...finally...close()를 수행)

print("\n--- 7. 컨텍스트 매니저 (with) ---")

file_path = "my_advanced_test_file.txt"

# 'with' 문을 사용한 파일 쓰기
# C#의 'using (StreamWriter f = new StreamWriter(file_path)) { ... }'

try:
    with open(file_path, "w", encoding="utf-8") as f:
        f.write("Hello, 'with' statement!\n")
        f.write("이 블록이 끝나면 f.close()가 자동으로 호출됩니다.\n")
        
        # 만약 여기서 오류가 발생해도...
        # raise Exception("강제 오류 발생!")
    
    print(f"  '{file_path}' 쓰기 완료 (자동으로 닫힘)")

except Exception as e:
    print(f"  오류 발생: {e}")
    print("  (오류가 발생했어도 파일은 자동으로 닫혔습니다.)")

finally:
    # 예제 실행 후 생성된 파일 정리
    if os.path.exists(file_path):
        os.remove(file_path)
        print(f"  (생성된 테스트 파일 '{file_path}' 삭제 완료)")


print("\n--- 파이썬 고급 문법 정리 끝 ---")
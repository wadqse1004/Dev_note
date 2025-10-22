# =================================================================
# 파이썬 핵심 기본 문법 요약 (Python Basics Summary)
# =================================================================

# 이 파일은 파이썬의 기본적인 문법을 정리한 스크립트입니다.
# 각 섹션의 코드를 실행하거나 주석을 해제하여 테스트해볼 수 있습니다.

# ---
## 1. 변수 (Variables)
# ---
# 데이터를 저장하는 공간입니다. 
# 자료형을 미리 선언할 필요 없이 값을 할당하면 자동으로 타입이 결정됩니다.

name = "홍길동"      # 문자열 (str)
age = 25             # 정수 (int)
height = 175.5       # 실수 (float)
is_student = True    # 불리언 (bool - True/False)

# print(f"이름: {name}, 나이: {age}, 키: {height}, 학생인가? {is_student}")


# ---
## 2. 자료형 (Data Types)
# ---

# 2-1. 리스트 (List)
# 순서가 있고 수정 가능한 값들의 모음. [] 사용
print("\n--- 2-1. 리스트 (List) ---")
my_list = [1, "apple", 3.5]
print(f"초기 리스트: {my_list}")

my_list[0] = 0               # 인덱싱으로 값 변경
my_list.append("banana")     # .append()로 값 추가
print(f"변경된 리스트: {my_list}")
print(f"리스트의 첫 번째 요소: {my_list[0]}")


# 2-2. 튜플 (Tuple)
# 순서가 있지만 수정 불가능한(immutable) 값들의 모음. () 사용
print("\n--- 2-2. 튜플 (Tuple) ---")
my_tuple = (1, 2, "hello")
print(f"튜플: {my_tuple}")
print(f"튜플의 두 번째 요소: {my_tuple[1]}")
# my_tuple[0] = 0  # 이 코드는 주석을 해제하면 TypeError 오류 발생 (수정 불가)


# 2-3. 딕셔너리 (Dictionary)
# Key-Value 쌍으로 이루어진 모음. {} 사용
print("\n--- 2-3. 딕셔너리 (Dictionary) ---")
my_dict = {"이름": "김철수", "나이": 30}
print(f"딕셔너리: {my_dict}")

print(f"이름: {my_dict['이름']}") # Key를 이용해 Value 접근
my_dict["직업"] = "개발자"         # 새로운 Key-Value 쌍 추가
print(f"추가된 딕셔너리: {my_dict}")


# ---
## 3. 주석 (Comments)
# ---

# 이것은 한 줄 주석입니다. 코드 실행에 영향을 주지 않습니다.

"""
이것은
여러 줄에 걸친
주석입니다. (정확히는 여러 줄 문자열이지만 주석처럼 사용됩니다.)
"""

# ---
## 4. 연산자 (Operators)
# ---
print("\n--- 4. 연산자 (Operators) ---")
a = 10
b = 3

# 산술 연산자
print(f"a + b = {a + b}") # 더하기
print(f"a / b = {a / b}") # 나누기 (실수)
print(f"a // b = {a // b}") # 나누기 (몫)
print(f"a % b = {a % b}") # 나머지
print(f"a ** b = {a ** b}") # 제곱

# 비교 연산자 (결과는 True 또는 False)
print(f"a > b ? {a > b}")
print(f"a == b ? {a == b}")
print(f"a != b ? {a != b}")

# 논리 연산자
is_adult = True
has_ticket = False
print(f"is_adult and has_ticket ? {is_adult and has_ticket}") # AND
print(f"is_adult or has_ticket ? {is_adult or has_ticket}")  # OR
print(f"not is_adult ? {not is_adult}")                       # NOT


# ---
## 5. 제어문 (Control Flow)
# ---

# 5-1. if / elif / else (조건문)
# 파이썬은 들여쓰기(indentation)로 코드 블록을 구분합니다.
print("\n--- 5-1. 조건문 (if) ---")
score = 85

if score >= 90:
    print("A등급")
elif score >= 80:
    print("B등급") # 85점은 여기에 해당
else:
    print("C등급 이하")


# 5-2. for (반복문)
# 순회 가능한(iterable) 객체의 요소를 하나씩 반복합니다.
print("\n--- 5-2. 반복문 (for) ---")
fruits = ["사과", "바나나", "딸기"]
for fruit in fruits:
    print(fruit)

# range(n): 0부터 n-1까지의 숫자를 생성
# 0부터 4까지 5번 반복
print("range(5) 반복:")
for i in range(5):
    print(i)


# 5-3. while (반복문)
# 특정 조건이 True인 동안 코드를 반복 실행합니다.
print("\n--- 5-3. 반복문 (while) ---")
count = 0
while count < 3:
    print(f"while 현재 횟수: {count}")
    count += 1 # count = count + 1과 동일


# ---
## 6. 함수 (Functions)
# ---
# def 키워드로 함수를 정의합니다.
print("\n--- 6. 함수 (Functions) ---")

# 함수 정의 (반환값이 있는 함수)
def add(a, b):
    """
    두 수를 더하여 결과를 반환하는 함수입니다.
    (이런 식으로 함수 설명을 Docstring으로 작성합니다.)
    """
    result = a + b
    return result

# 함수 정의 (반환값이 없는 함수)
def greet(name):
    """
    이름을 받아 인사 메시지를 출력하는 함수입니다.
    """
    print(f"안녕하세요, {name}님!")

# 함수 호출
sum_result = add(5, 3)
print(f"add(5, 3)의 결과: {sum_result}")

greet("파이썬 학습자")


# ---
## 7. 모듈 가져오기 (Import)
# ---
# 다른 파이썬 파일(모듈)에 정의된 함수나 변수를 가져옵니다.
print("\n--- 7. 모듈 가져오기 (Import) ---")

# 7-1. 모듈 전체 가져오기 (math 모듈)
import math
print(f"원주율(math.pi): {math.pi}")
print(f"4의 제곱근(math.sqrt(4)): {math.sqrt(4)}")

# 7-2. 모듈에서 특정 객체만 가져오기 (datetime 모듈)
from datetime import datetime
# 위와 같이 import하면 datetime.now() 대신 now()로 바로 사용 가능
current_time = datetime.now()
print(f"현재 시간: {current_time}")

# 7-3. 모듈 가져오며 별칭(alias) 사용하기
import random as rd # random 모듈을 rd라는 이름으로 사용
random_number = rd.randint(1, 10) # 1부터 10 사이의 임의의 정수
print(f"랜덤 숫자 (1~10): {random_number}")

print("\n--- 파이썬 기본 문법 정리 끝 ---")
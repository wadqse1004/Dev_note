/*
=================================================================
C언어 핵심 기본 문법 요약 (C Language Basics Summary)
=================================================================
*/

// 표준 입출력(printf, scanf 등) 함수를 사용하기 위한 헤더 파일
#include <stdio.h>

// ---
// 5. 함수 (Functions)
// ---
// 함수는 특정 작업을 수행하는 코드 블록입니다.
// C에서는 함수가 반환할 값의 자료형(예: int)과
// 받을 매개변수(parameter)의 자료형을 명시해야 합니다.
// (main 함수보다 먼저 정의하거나, main 함수 위에 '프로토타입'을 선언해야 합니다.)

// 'add' 함수 정의
// 반환형: int, 매개변수: int a, int b
int add(int a, int b) {
    int result = a + b;
    return result; // 'return' 키워드로 결과 반환
}


// 'main' 함수: C 프로그램의 실행 시작점
int main(void) {

    // ---
    // 1. 변수와 자료형 (Variables & Data Types)
    // ---
    // 변수를 사용하기 전에 반드시 자료형을 선언해야 합니다.
    // 모든 문장(statement)은 세미콜론(;)으로 끝나야 합니다.
    
    int age = 25;           // 정수 (integer)
    float height = 175.5f;  // 실수 (float), 숫자 뒤에 f를 붙이기도 함
    double pi = 3.141592;   // float보다 정밀한 실수 (double)
    char initial = 'K';     // 문자 하나 (character), 작은따옴표 사용

    // printf로 변수 출력. \n은 줄바꿈 문자입니다.
    printf("--- 1. 변수와 자료형 ---\n");
    printf("나이 (int): %d\n", age);
    printf("키 (float): %f\n", height);    // %f는 float 출력
    printf("원주율 (double): %lf\n", pi);  // %lf는 double 출력
    printf("이니셜 (char): %c\n", initial); // %c는 char 출력


    // ---
    // 2. 기본 입출력 (I/O)
    // ---
    // printf() : 화면에 출력
    // scanf() : 사용자로부터 입력받음
    
    int input_num;
    printf("\n--- 2. 기본 입출력 ---\n");
    printf("정수를 하나 입력하세요 (테스트용): ");
    
    // scanf("%d", &input_num); // 아래 주석을 해제하여 테스트 가능
    // printf("입력한 정수: %d\n", input_num);
    
    // 주석 처리된 이유: 자동화된 실행 시 입력 대기 상태에 빠질 수 있으므로,
    // 필요시 주석을 풀고 직접 컴파일하여 테스트하세요.
    printf("(scanf 테스트는 주석 처리됨)\n");


    // ---
    // 3. 연산자 (Operators)
    // ---
    printf("\n--- 3. 연산자 ---\n");
    int a = 10;
    int b = 3;

    // 산술 연산자
    printf("a / b (몫): %d\n", a / b); // 정수 나눗셈은 몫만 반환 (3)
    printf("a %% b (나머지): %d\n", a % b); // 1

    // 증감 연산자
    a++; // a를 1 증가시킴 (a는 11이 됨)
    printf("a++ 후: %d\n", a);

    // 논리 연산자 (&&: AND, ||: OR, !: NOT)
    if (a > 0 && b == 3) { // && (AND)
        printf("a는 양수이고 b는 3입니다.\n");
    }


    // ---
    // 4. 제어문 (Control Flow)
    // ---
    // 코드 블록(범위)을 중괄호 {}로 구분합니다.

    // 4-1. if / else if / else
    printf("\n--- 4-1. if문 ---\n");
    int score = 85;
    if (score >= 90) {
        printf("A등급\n");
    } else if (score >= 80) {
        printf("B등급\n");
    } else {
        printf("C등급 이하\n");
    }

    // 4-2. switch
    // 특정 변수의 값에 따라 분기할 때 사용
    printf("\n--- 4-2. switch문 ---\n");
    int choice = 1;
    switch (choice) {
        case 1:
            printf("메뉴 1 선택\n");
            break; // 'break'가 없으면 다음 case가 연달아 실행됩니다.
        case 2:
            printf("메뉴 2 선택\n");
            break;
        default: // if문의 else와 비슷함
            printf("잘못된 선택\n");
    }

    // 4-3. for (반복문)
    // for (초기식; 조건식; 증감식)
    printf("\n--- 4-3. for문 ---\n");
    // 0부터 4까지 5번 반복 (i가 0, 1, 2, 3, 4일 때)
    for (int i = 0; i < 5; i++) {
        printf("for 반복: %d\n", i);
    }

    // 4-4. while (반복문)
    // 조건이 참(true)인 동안 반복
    printf("\n--- 4-4. while문 ---\n");
    int count = 0;
    while (count < 3) {
        printf("while 반복: %d\n", count);
        count++;
    }


    // ---
    // 5. 함수 (Functions) - 호출
    // ---
    printf("\n--- 5. 함수 호출 ---\n");
    // 'main' 함수 위쪽에 정의된 add 함수를 호출합니다.
    int sum_result = add(5, 3);
    printf("add(5, 3)의 결과: %d\n", sum_result);


    // ---
    // 6. 배열 (Arrays)
    // ---
    // 같은 자료형의 데이터를 연속된 공간에 저장하는 구조.
    // C언어 배열은 크기가 고정됩니다.
    printf("\n--- 6. 배열 ---\n");
    
    // 3칸짜리 정수형 배열을 선언하고 초기화
    int scores[3] = {100, 90, 80};

    // 배열 요소에 접근 (인덱스는 0부터 시작)
    scores[1] = 95; // 90을 95로 변경
    
    printf("첫 번째 점수: %d\n", scores[0]);
    printf("변경된 두 번째 점수: %d\n", scores[1]);

    // 배열과 for문
    printf("배열 전체 출력:\n");
    for (int i = 0; i < 3; i++) {
        printf("scores[%d] = %d\n", i, scores[i]);
    }


    // ---
    // 7. 포인터 (Pointers)
    // ---
    // C언어의 핵심. 메모리 '주소'를 저장하는 변수입니다.
    printf("\n--- 7. 포인터 ---\n");
    
    int num = 10;
    int *ptr; // int형 데이터를 가리키는(point) 포인터 변수 ptr 선언

    ptr = &num; // & (주소 연산자): num 변수의 메모리 주소를 ptr에 저장

    printf("변수 num의 값: %d\n", num);
    printf("ptr이 가리키는 주소의 값: %d\n", *ptr); // * (역참조 연산자): 그 주소에 있는 실제 값
    
    // 포인터를 통해 num의 값을 변경
    *ptr = 20;
    printf("포인터로 변경한 num의 값: %d\n", num); // 20이 출력됨


    // ---
    // 8. 주석 (Comments)
    // ---
    // 이것은 한 줄 주석입니다.
    
    /*
    이것은
    여러 줄에 걸친
    주석입니다.
    */


    printf("\n--- C언어 기본 문법 정리 끝 ---\n");

    // main 함수가 0을 반환(return)하면 프로그램이 정상적으로 종료되었음을 의미
    return 0; 
}
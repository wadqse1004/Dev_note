/*
=================================================================
C언어 고급(핵심) 문법 요약 (C Language Advanced Topics)
=================================================================
*/

// printf, NULL 등
#include <stdio.h> 
// malloc, free, qsort 등
#include <stdlib.h> 
// strcpy 등 (문자열 처리)
#include <string.h> 

// ---
// 5. 함수 포인터 (Function Pointers) 예제를 위한 함수 선언
// ---
int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }

// qsort 비교 함수 예제 (int 오름차순)
int compare_int(const void *a, const void *b) {
    // void* 포인터를 int*로 형변환 후 역참조
    return ( *(int*)a - *(int*)b );
}


// 'main' 함수: C 프로그램의 실행 시작점
int main(void) {

    printf("--- C언어 고급(핵심) 문법 정리 --- \n");

    // ---
    // 1. 포인터 심화 (Advanced Pointers)
    // ---
    printf("\n--- 1. 포인터 심화 ---\n");
    
    // 1-1. 이중 포인터 (Double Pointer, **)
    // 포인터 변수의 '주소'를 가리키는 포인터.
    int num = 100;
    int *ptr1 = &num;   // num의 주소를 가리킴
    int **ptr2 = &ptr1; // ptr1 변수 자체의 주소를 가리킴
                        // C#의 'ref' 키워드로 포인터를 전달하는 것과 유사

    printf("  원본 (num): %d\n", num);
    printf("  *ptr1 (ptr1이 가리키는 값): %d\n", *ptr1);
    printf("  **ptr2 (ptr2가 가리키는 포인터가 가리키는 값): %d\n", **ptr2);

    // 1-2. void* (범용 포인터)
    // C#의 'object' 타입처럼 어떤 타입의 주소든 저장 가능.
    // 사용할 때는 반드시 명시적 형변환(casting) 필요.
    int i_val = 10;
    float f_val = 3.14f;
    void *void_ptr;

    void_ptr = &i_val;
    printf("  void* (int로 형변환): %d\n", *(int*)void_ptr);

    void_ptr = &f_val;
    printf("  void* (float로 형변환): %f\n", *(float*)void_ptr);


    // ---
    // 2. 동적 메모리 할당 (Dynamic Memory Allocation)
    // ---
    // C#의 가비지 컬렉터(GC)와 달리, C는 '수동'으로 힙(Heap) 메모리를 관리.
    // malloc (할당) <-> free (해제)는 반드시 짝을 이뤄야 함. (메모리 누수 방지)
    // C#의 'new'로 객체 생성 후 'Dispose()'나 'using'으로 해제하는 것과 비슷하나,
    // C는 'free'를 누락하면 프로그램 종료 전까지 메모리가 해제되지 않음.
    printf("\n--- 2. 동적 메모리 할당 (malloc/free) ---\n");

    // int 5개를 저장할 수 있는 공간 (4 bytes * 5 = 20 bytes)을 힙에 할당
    // sizeof() 연산자는 해당 자료형의 크기(byte)를 반환.
    int *dynamic_array = (int*)malloc(sizeof(int) * 5);

    // 2-1. 할당 확인 (매우 중요!)
    // 시스템 메모리가 부족하면 malloc은 NULL을 반환.
    if (dynamic_array == NULL) {
        printf("  메모리 할당 실패!\n");
        return 1; // 프로그램 비정상 종료
    }
    
    // 2-2. 메모리 사용 (배열처럼 사용)
    for (int i = 0; i < 5; i++) {
        dynamic_array[i] = i * 10;
        printf("  dynamic_array[%d] = %d\n", i, dynamic_array[i]);
    }

    // 2-3. 메모리 해제 (필수!)
    // C#의 GC와 달리, 개발자가 명시적으로 'free'를 호출해야 함.
    free(dynamic_array);
    dynamic_array = NULL; // (선택 사항) 해제 후 포인터를 NULL로 초기화 (Dangling Pointer 방지)
    printf("  동적 메모리 해제 완료 (free)\n");


    // ---
    // 3. 구조체(struct)와 공용체(union)
    // ---
    // C#의 'struct' 또는 간단한 'class'와 유사 (데이터를 묶는 기능)
    // C에는 'class'가 없으므로 'struct'가 그 역할을 대신함.
    printf("\n--- 3. 구조체(struct)와 공용체(union) ---\n");

    // 3-1. 구조체 (struct)
    // 멤버 변수들이 메모리에 순차적으로 할당됨.
    // C#의 'struct'와 거의 동일.
    struct Person {
        char name[20];
        int age;
    };

    struct Person p1;
    strcpy(p1.name, "홍길동"); // 문자열 대입은 strcpy 사용
    p1.age = 30;
    
    printf("  구조체(struct) p1: 이름=%s, 나이=%d\n", p1.name, p1.age);
    printf("  sizeof(p1): %lu 바이트\n", sizeof(p1)); // 20(char[20]) + 4(int) + 패딩(padding)

    // 3-2. 공용체 (union)
    // *모든* 멤버가 *하나의* 메모리 공간을 공유함. (가장 큰 멤버의 크기로 할당)
    // C#에는 없는 개념. 메모리를 극도로 절약하거나,
    // 한 메모리 공간을 여러 타입으로 해석할 때 사용.
    union Data {
        int i;
        float f;
        char str[4];
    };
    
    union Data data;
    printf("  sizeof(data): %lu 바이트\n", sizeof(data)); // int(4), float(4), char[4] 중 가장 큰 4
    
    data.i = 10;
    printf("  union data (int로 저장): %d\n", data.i);
    
    data.f = 3.14f;
    printf("  union data (float로 저장): %f\n", data.f);
    
    // 중요: float를 저장한 뒤 int로 읽으면? -> 쓰레기 값 (메모리 공유)
    printf("  union data (float 저장 후 int로 읽기): %d\n", data.i);


    // ---
    // 4. 전처리기 매크로 (Preprocessor Macros)
    // ---
    // #define: 컴파일 전에 텍스트를 단순 '치환'함.
    printf("\n--- 4. 전처리기 매크로 (#define) ---\n");

    // 4-1. 상수형 매크로
    #define PI 3.14159
    printf("  상수 매크로 PI: %f\n", PI);
    
    // 4-2. 함수형 매크로
    // C#의 간단한 인라인 함수나 람다와 비슷해 보이지만, 단순 '텍스트 치환'임.
    // (a) + (b) 처럼 괄호로 감싸는 것이 매우 중요 (연산자 우선순위 함정 방지)
    #define SQUARE(x) ((x) * (x))
    
    printf("  함수 매크로 SQUARE(5): %d\n", SQUARE(5));
    // SQUARE(1 + 4) -> ((1 + 4) * (1 + 4))로 올바르게 치환됨

    // 4-3. 조건부 컴파일 (C#의 #if DEBUG)
    #define DEBUG_MODE 
    
    #ifdef DEBUG_MODE
        printf("  (디버그 모드입니다.)\n");
    #else
        printf("  (릴리즈 모드입니다.)\n");
    #endif


    // ---
    // 5. 함수 포인터 (Function Pointers)
    // ---
    // C#의 'delegate' 또는 'Action<T>', 'Func<T, TResult>'와 100% 동일한 개념.
    // 함수의 '주소'를 저장하는 포인터 변수.
    // 콜백(callback) 함수를 구현할 때 핵심적으로 사용됨.
    printf("\n--- 5. 함수 포인터 (Delegate/Callback) ---\n");

    // 5-1. 함수 포인터 선언 및 사용
    // 반환형: int, 매개변수: (int, int)인 함수 포인터 'calc_ptr' 선언
    int (*calc_ptr)(int, int);

    // calc_ptr에 add 함수의 주소를 할당 (C#의: calc_ptr = add;)
    calc_ptr = add; 
    int result = calc_ptr(10, 5); // 포인터를 통해 add 함수 호출
    printf("  함수 포인터 (add) 결과: %d\n", result); // 15

    // calc_ptr에 subtract 함수의 주소를 할당
    calc_ptr = subtract;
    result = calc_ptr(10, 5); // 포인터를 통해 subtract 함수 호출
    printf("  함수 포인터 (subtract) 결과: %d\n", result); // 5

    // 5-2. 함수 포인터 활용 (콜백 예제: qsort)
    // C 표준 라이브러리의 정렬 함수 'qsort'
    // qsort(정렬할 배열, 요소 개수, 요소 크기, 비교 함수 포인터);
    // '비교 함수 포인터'가 바로 C#의 delegate/callback 개념.
    int numbers[] = {50, 20, 10, 40, 30};
    int n_count = 5;

    printf("  qsort (정렬 전): ");
    for(int i=0; i<n_count; i++) printf("%d ", numbers[i]);
    
    qsort(numbers, n_count, sizeof(int), compare_int); // compare_int 함수를 '콜백'으로 전달

    printf("\n  qsort (정렬 후): ");
    for(int i=0; i<n_count; i++) printf("%d ", numbers[i]);
    printf("\n");


    printf("\n--- C언어 고급(핵심) 문법 정리 끝 ---\n");

    return 0; // 프로그램 정상 종료
}
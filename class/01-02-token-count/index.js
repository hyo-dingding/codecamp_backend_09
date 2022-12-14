// 6자리 토큰의 한계점(6자리로 고정되어 있어 재사용이 어렵다.)

// 1. 재사용이 가능한 token 생성 함수(getToken함수)실습

function getToken(count) {
  const result = String(Math.floor(Math.random() * 10 ** count)).padStart(
    count,
    "0"
  );
  console.log(result);
}

getToken(3);
getToken(4);
getToken(5);
getToken(6);

// getToken 함수 실행 시 몇 자리의 토큰이 필요한지 알려주기 위해 Param 가 필요함.(count)
// 10*10*10*10*10*10 = 10의 6승, 10의 6제곱
// 제곱 해주는 연산자 **
// 10** 2 =  10의 2제곱/ 10** 3 = 10의 3제곱

// 2. getToken 함수의 안정성 높이기(if문을 사용해 예외처리 해주기)

function getToken(count) {
  if (count !== undefined) {
    if (count >= 2) {
      if (count < 10) {
        const result = String(Math.floor(Math.random() * 10 ** count)).padStart(
          count,
          "0"
        );
        console.log(result);
      } else {
        console.log("에러발생!! 갯수가 너무 많습니다!");
      }
    } else {
      console.log("에러발생!! 갯수가 너무 작습니다!");
    }
  } else {
    console.log("에러발생!! 갯수를 제대로 입력해주세요!");
  }
}

getToken();
getToken(-2);
getToken(15);
getToken(4);

// 너무 보기 여렵다. !! 안좋은 예제

// 3. getToken 함수의 안정성 높이기(리팩토링 패턴 중 하나)
// early exit : 빠르게 종료한다. 아닌것 부터 빨리 처리한다.
// 코드 가독성이 좋아야 유지보수가 좋아짐.

function getToken(count) {
  // 1. 에러먼저 나열
  if (count === undefined) {
    console.log("에러발생!! 갯수를 제대로 입력해주세요!");
    result;
  }
  if (count >= 2) {
    console.log("에러발생!! 갯수가 너무 작습니다!");
    return;
  }
  if (count > 10) {
    console.log("에러발생!! 갯수가 너무 많습니다!");
    return;
  }
  const result = String(Math.floor(Math.random() * 10 ** count)).padStart(
    count,
    "0"
  );
  console.log(result);
}

getToken();
getToken(-2);
getToken(15);
getToken(4);

// 실무용으로 변경하기 위해 알아야할 함수의 필수 개념들이 있음.(매개변수, 인자, 스코프, 리턴)
// 함수 선언하기
function add() {
  const a = 1;
  const b = 1;
  const result1 = a + b; // 더하기 기능
  console.log(result1);
}

// 함수 실행하기
add();

// --------------------------------------------------
// 더할 값  전달하여 재사용성 높이기
// 함수 선언하기
function add(a, b) {
  //  매개변수(Parameter, Param)
  const result1 = a + b;
  console.log(result1);
}

// 함수 실행하기
add(1, 2); // 인자(Argument, Arg)

//------------------------------------------------------
// 스코프 ?
// a와 b에 사용핳 공간은 중괄호 안임 중괄호안에 만 a,b가 존재함. { 범위를 스코프라고함 }

function qqq() {
  const bananan = 10;

  function add(a, b) {
    console.log(bananan);
    const result = a + b;
  } // scope 이중괄호 안에서만 a, b가 살아있다.

  console.log(a);
  console.log(b);
  console.log(result);
} // scope

// 중괄호 안에 바나나 찾는다. 없으면 밖에있는 중괄호에서 찾음. 없으면 밖에 중괄호로 가서 또 찾음.
// 매우중요 한것은 중괄호 안에서 밖에있는걸 가져다 쓸수 있음.
//  qqq 중괄호안에 banana 가있고 그 안에 a,b, result 가 있는것이라 바나나는 에러 안나는데 a, b, result 는 에러다
// console.log(bananan)를 찾기 위해 밖에 {} 에서 찾아오는 작업을 스코프를 체인처럼 연결했다고 해서 scope-chain 이라 함.

// 하나의 함수는 하나의 기능만 하게끔 만드는게 암묵적 룰이다.

// return은 결과반환하고 함수종료힌다라는 뜻

// 함수 선언문

// 반환값이 없는 경우 = void 타입 : 반환되는 값이 없을 때 사용
function add(n1: number, n2: number): void {
  console.log(n1 + n2);
}

add(10, 20);

// 반환값이 있는 경우 = 매개변수의 숫자값을 받기 때문에 number 타입 지정.
function add2(n1: number, n2: number): number {
  return n1 + n2;
}

add2(10, 20);

// 함수 표현식

const add3 = function (n1: number, n2: number): void {
  console.log(n1 + n2);
};

const add4 = function (n1: number, n2: number): number {
  return n1 + n2;
};

// 변수 타입 지정하기
const add5: (n1: number, n2: number) => number = function (n1, n2) {
  return n1 + n2;
};

// 매개변수, 반환값이 없는 경우 타입 지정 => 메세지만 출력하는 함수의 경우
const printHello: () => void = function () {
  console.log("Hello");
};
// 화살표 함수 형태도 타입 지정에 문제 없다.
const printHello1: () => void = () => {
  console.log("Hello");
};

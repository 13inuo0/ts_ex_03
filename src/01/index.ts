// 반환값이 없는 경우 = void 타입 : 반환되는 값이 없을 때 사용
function add(n1: number, n2: number): void {
  console.log(n1 + n2);
}

add(10, 20);

// 반환값이 있는 경우
function add2(n1: number, n2: number): number {
  return n1 + n2;
}

add2(10, 20);

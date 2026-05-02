// never : 절대로 발생하지 않는 경우 사용하는 타입
// 함수 내부에서 예외를 던지는 경우
function throwError(err: string): never {
  throw new Error(err);
}

// 함수 내부에서 무한루프 발생하는 경우
function infiniteLoop(): never {
  while (true) {}
}

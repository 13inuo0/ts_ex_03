// Any 타입은 어느 자료형이든 사용 가능하지만 값에 대한 타입을 도저히 파악할수 없는 경우를 제외하곤 사용하지 않는 것을 권장.
// let a: any = "Hello";
// let b: any = "World!";
// let c = typeof a + b;

// console.log(c);

// unknown 타입 사용 시 타입을 좁혀서 사용해야 에러가 발생하지 않는다.
// 오류발생
// let d: unknown = "Hello";
// let e: unknown = "World!";
// let f = d + e;
// console.log(f);

// 타입을 좁힌 경우 에러x 삼항연산자나 if문을 사용.
let d: unknown = "Hello";
let e: unknown = "World!";
let f = typeof d === "string" && typeof e === "string" ? d + e : "문자열이 아니다.";

console.log(f);

// any타입 사용보단 unknown타입을 사용하는게 타입스크립트 이용 취지에 더 맞는 방법.

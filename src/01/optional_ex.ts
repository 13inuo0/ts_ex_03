// 자바스크립트에서는 에러 발생이 없지만, 타입스크립트에서는 매개변수를 지정해줘도 에러가 발생한다.
// 매개변수의 갯수가 일치하지 않기 때문.
const printUserName1 = (lastName: string, firstName: string): string => `${lastName} ${firstName || ""}`;
const result1 = printUserName("Andrew", "smith");
console.log(result);

// 같은 조건에 에러가 발생하지 않게 하려면 해당 매개변수에 ? 를 작성.
// ?는 필수가 아닌 선택적으로 작성 가능. 옵셔널 프로퍼티
const printUserName2 = (lastName: string, firstName?: string): string => `${lastName} ${firstName || ""}`;
const result2 = printUserName("Andrew");
console.log(result);

// 다른 예문 (동적 속성 추가 에러)
// const user = {
//   name: "John Doe",
//   age: 30,
// };

// user.gender = "female";

// 타입 지정
const user2: { name: string; age: number; gender?: string } = {
  name: "John Doe",
  age: 30,
};

user2.gender = "femail";

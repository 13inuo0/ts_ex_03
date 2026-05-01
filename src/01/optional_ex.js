const printUserName = (lastName, firstName) => `${lastName} ${firstName || ""}`;
const result = printUserName("Andrew");
console.log(result);

// 함수의 매개변수의 개수를 일치시키지 않아도 에러가 발생하지 않는다.
function Today() {
  const date = new Date();
  const yyyy = String(date.getFullYear()).padStart(4, "0");

  const MM = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  //const mm = date.getMinutes().padStart(2, "0"); //date.getMinutes <-- Number
  //Number에는 padStart가 존재 하지 않음
  //즉, String으로 바꿔서 조정하거나, 다른 방법을 사용 해야함....
  const ss = String(date.getSeconds()).padStart(2, "0");

  const result = `오늘은 ${yyyy}년 ${MM}월 ${dd}일 ${hh}:${mm}:${ss}입니다.`;
  console.log(result);
  return result;
}

Today();

// 참고

// 최종 출력 값이 String 형태로 출력 되기 때문에 각각의 연도, 월, 일 등의 값은 Number로 반환 되어 있으나,
// String으로 변환한 상태에서 가공하는 방법도 올바른 방법중 하나라 생각됩니다.
// String 객체가 가지고 있는 padStrart()라는 메서드를 사용하기 위해 형변환을 한 것으로 보이는데,
// Number 또한 자리수를 변경 할 수 있는 방법도 존재하니 찾아보시면 좋을 듯 합니다.

// function dataNormalizer(number, digits) {
//   return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }

// function nowDate() {
//   let date = new Date();
//   let dateObj = {
//       year: dataNormalizer(date.getFullYear(), 4),
//       mon: dataNormalizer(date.getMonth() + 1, 2),
//       day: dataNormalizer(date.getDate(), 2),
//       hour: dataNormalizer(date.getHours(), 2),
//       min: dataNormalizer(date.getMinutes(), 2),
//       sec: dataNormalizer(date.getSeconds(), 2),
//   };
//   return dateObj;
// }

// function logCat() {
//   console.log(dateToString(nowDate()));
// }

// logCat();

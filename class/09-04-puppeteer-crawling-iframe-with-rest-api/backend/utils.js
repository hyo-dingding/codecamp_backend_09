export function getToday() {
  // const date = new Date()
  // const year = qqq.getFullYear()
  // const month =  qqq.getMonth()+1
  // const date = qqq.getDate()
  // const result = `${year}-${month}-${date}`

  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const result = `${yyyy}-${mm}-${dd}`;
  console.log(result);
  return result;
}

// function numberPadStart(number, digits) {
//   return (
//     Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number
//   );
// }

// function Today() {
//   const date = new Date();
//   const yyyy = String(date.getFullYear()).padStart("0", 4);
//   // const yyyy = numberPadStart(date.getFullYear(), 4);
//   const MM = numberPadStart(date.getMonth() + 1, 2);
//   const dd = numberPadStart(date.getDate(), 2);
//   const hh = numberPadStart(date.getHours(), 2);
//   const mm = numberPadStart(date.getMinutes(), 2);
//   //const mm = date.getMinutes().padStart(2, "0"); //date.getMinutes <-- Number
//   //Number에는 padStart가 존재 하지 않음
//   //즉, String으로 바꿔서 조정하거나, 다른 방법을 사용 해야함....
//   const ss = numberPadStart(date.getSeconds(), 2);

//   const result = `오늘은 ${yyyy}년 ${MM}월 ${dd}일 ${hh}:${mm}:${ss}입니다.`;
//   console.log(result);
//   return result;
// }

// Today();

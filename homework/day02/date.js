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

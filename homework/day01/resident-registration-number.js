function HyphenRegistrationNumber(number) {
  if (!number.includes("-")) {
    console.log("에러발생!!형식이 올바르지 않습니다!!!");
    return false;
  } else {
    return true;
  }
}

function CheckRegistrationNumber(newNumber) {
  if (newNumber[0].length === 6 && newNumber[1].length === 7) {
    return true;
  } else {
    console.log("에러발생!! 개수를 제대로 입력해 주세요!!!");
    return false;
  }
}
function customRegistrationNumber(number) {
  let isValid = HyphenRegistrationNumber(number);
  if (isValid === false) return;

  const newNumber = number.split("-");

  isValid = CheckRegistrationNumber(newNumber);
  if (isValid === false) return;
  console.log(newNumber[0] + "-" + newNumber[1].substring(0, 1) + "******");
}

customRegistrationNumber("210510-1010101");
customRegistrationNumber("210510-1010101010101");
customRegistrationNumber("2105101010101");

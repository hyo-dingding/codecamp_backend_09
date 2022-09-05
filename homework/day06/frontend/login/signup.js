// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector("#ValidationInputWrapper").style.display = "flex";
  console.log("인증 번호 전송");
  const myPhone1 = document.getElementById("PhoneNumber01").value;
  const myPhone2 = document.getElementById("PhoneNumber02").value;
  const myPhone3 = document.getElementById("PhoneNumber03").value;
  const myPhone = myPhone1 + myPhone2 + myPhone3;

  axios
    .post("http://localhost:3000/tokens/phone", {
      myPhone: myPhone,
    })
    .then((res) => {
      return res;
    });
  // return myPhone;
};

// 회원 가입 API 요청
const submitSignup = async () => {
  console.log("회원 가입 이메일 전송");

  const myPhone1 = document.getElementById("PhoneNumber01").value;
  const myPhone2 = document.getElementById("PhoneNumber02").value;
  const myPhone3 = document.getElementById("PhoneNumber03").value;
  const myphone = myPhone1 + myPhone2 + myPhone3;

  const data = {
    name: document.getElementById("SignupName").value,
    regiNum: document.getElementById("SignupPersonal").value,
    web: document.getElementById("SignupPrefer").value,
    email: document.getElementById("SignupEmail").value,
    password: document.getElementById("SignupPwd").value,
    myphone,
  };

  const result = await axios
    .post("http://localhost:3000/users", data)
    .then((res) => {
      // console.log(res);
      console.log(result);
      console.log(res.data);
      return res.data;
    });
};

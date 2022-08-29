// console.log("Hello World!!");

function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(result);
}

getToken();

//  String.padStart(maxLength: number, fillString?: string | undefined): string
// String.padEnd(maxLength: number, fillString?: string | undefined): string  뒤에 채워줄 것

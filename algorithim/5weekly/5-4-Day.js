// 숫자 문자열과 영단어
// 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

// 참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

// 숫자	영단어
// 0	zero
// 1	one
// 2	two
// 3	three
// 4	four
// 5	five
// 6	six
// 7	seven
// 8	eight
// 9	nine
// 제한사항
// 1 ≤ s의 길이 ≤ 50
// s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
// return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.
// 입출력 예
// s	result
// "one4seveneight"	1478
// "23four5six7"	234567
// "2three45sixseven"	234567
// "123"	123

let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function solution(s) {
    for (let i = 0; i < numbers.length; i++) {
        while (s.includes(numbers[i])) {
            s = s.replace(numbers[i], i);
        }
    }
    return Number(s);
}
// replaceAll 메소드 사용하기

let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function solution(s) {
    for (let i = 0; i < numbers.length; i++) {
        s = s.replaceAll(numbers[i], i);
    }
    return Number(s);
}

//forEach,split,join 메소드 사용하기

let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function solution(s) {
    numbers.forEach((el, i) => {
        s = s.split(el).join(i);
    });
    return Number(s);
}
//  정규 표현식 사용하기

let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function solution(s) {
    //    표현식 사용법: 슬래시를 열고 닫아준다.
    //    슬래시 안쪽에 검증할 문자열
    //    g : 문자열 전체에서 검색
    for (let i = 0; i < numbers.length; i++) {
        const regExp = new RegExp(numbers[i], "g");
        s = s.replace(regExp, i);
    }
    return Number(s);
}

// 소수 만들기
// 문제 설명
// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
// nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
// 입출력 예
// nums	result
// [1,2,3,4]	1
// [1,2,7,6,4]	4
// 입출력 예 설명
// 입출력 예 #1
// [1,2,4]를 이용해서 7을 만들 수 있습니다.

// 입출력 예 #2
// [1,2,4]를 이용해서 7을 만들 수 있습니다.
// [1,4,6]을 이용해서 11을 만들 수 있습니다.
// [2,4,7]을 이용해서 13을 만들 수 있습니다.
// [4,6,7]을 이용해서 17을 만들 수 있습니다.

//[1]

function solution(nums) {
    let answer = 0;
    for (let i = 0; i < nums.length; i++) {
        // console.log(nums[i])
        for (let j = i + 1; j < nums.length; j++) {
            // console.log(nums[i], nums[j])
            for (let k = j + 1; k < nums.length; k++) {
                // console.log(nums[i], nums[j], nums[k])
                const sum = nums[i] + nums[j] + nums[k];
                // console.log(sum)
                let count = 0;
                for (let o = 1; o <= sum; o++) {
                    if (sum % o === 0) {
                        count++;
                        // console.log(sum, count)
                        if (count > 2) {
                            break;
                        }
                    }
                }
                // console.log(sum, count)
                if (count === 2) {
                    answer++;
                }
            }
        }
    }

    return answer;
}

solution([1, 2, 3, 4]); //1
solution([1, 2, 7, 6, 4]); //4

// [2]
function solution(nums) {
    let answer = 0;
    let index = 0;
    nums.forEach((num1, i) => {
        // console.log(num1)
        index = i + 1;
        nums.slice(index).forEach((num2) => {
            index += 1;
            nums.slice(index).forEach((num3) => {
                // console.log(num1, num2, num3)
                const sum = num1 + num2 + num3;
                let count = 0;
                if (sum % 2 === 1) {
                    for (let o = 1; o < sum; o++) {
                        if (sum % o === 0) {
                            count++;
                            if (count > 2) {
                                break;
                            }
                        }
                    }
                }
                if (count === 1) {
                    answer++;
                }
            });
        });
    });
    return answer;
}

solution([1, 2, 3, 4]); //1
solution([1, 2, 7, 6, 4]); //4

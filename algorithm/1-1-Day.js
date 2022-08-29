// [방법1]

let answer = 0; //이동횟수
let limit = 100; // 이동할 층

for (let i = 1; i < limit.length; i = i + 2) {
  answer = answer + 1;
}

// [방법2]
const limit1 = 100; // 이동할 층
const answer1 = Math.floor(limit / 2);

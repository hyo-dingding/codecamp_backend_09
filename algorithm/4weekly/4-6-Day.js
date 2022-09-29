// 완주하지 못한 선수
// 문제 설명
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.
// 입출력 예
// participant	completion	return
// ["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
// ["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
// ["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"

// [1]
// splice 	배열에서 사용가능한  메서드
// 1. 지정한 배열에 특정 구간요소를 제거 할 수있다
const arr = [1, 2, 3, 4, 5];
arr.splice(1, 1); // 제거한 데이터들이 담긴 배열을 반환한다. //  [2]
// 2. 지정한 배열의 특정 구간에 요소를 추가할 수있다.
arr; // [ 1, 3, 4, 5 ]
// 2. 지정한 배열의 특정 구간에 요소를 추가할 수있다.
arr.splice(1, 0, 2); // 추가만 할때 0넣기
arr; // [ 1, 2, 3, 4, 5 ]

function solution(participant, completion) {
    for (let i = 0; i < completion.length; i++) {
        // console.log(completion[i])
        if (participant.includes(completion[i])) {
            participant.splice(participant.indexOf(completion[i]), 1);
        }
    }
    // console.log(participant)
    return participant[0];
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]); //"leo"
solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]); //"vinko"

solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]); //"mislav"

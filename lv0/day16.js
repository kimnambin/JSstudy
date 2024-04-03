/*머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 할머니가 보시기 편하도록 글자 한 자 한 자를 
가로 2cm 크기로 적으려고 하며, 편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 
필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요. */

function solution(message) {
    var answer = message.length;
    return answer * 2;
}
//난 이렇게 풀었는데 더 짧은 방법인 return message.length * 2; 라는 방법도 있었다

/*정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 
return 하도록 solution 함수를 완성해보세요. */

function solution(array) {
    var answer = [];
    let maxnum = Math.max(...array);
    let maxindex = array.indexOf(Math.max(...array));
    answer.push(maxnum,maxindex);
    return answer;
}

//처음엔 sort를 이용해서 오름차순을 만든 후 인덱스[0]을 찾아 가장 큰 수를 찾고 그 다음 array배열에서 인덱스 값을 찾으려고 했다
//그런데 가장 큰 수를 찾는 건 쉬웠으나 array배열에서 인덱스 값이 찾아지지 않고 계속 0을 반환했다 ㅠㅠ
//그렇게 혹시 배열에서 가장 큰 수를 찾는 다른 방법이 있나 찾던 중 Math.max() 함수를 발견했고 문제를 풀 수 있었다.

/*my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 
수식을 계산한 값을 return 하는 solution 함수를 완성해주세요. */

function solution(my_string) {
    var answer = my_string.split(' '); //공백을 제거
    let result = parseInt(answer[0])//숫자형으로 바꾸고 첫번째 값을 정답으로 할거임

    for (let i = 1; i < answer.length; i +=2){ //문자열 하나하나 비교
        const index1 = answer[i] //이게 공백제거한거 인자들
        const index2 = parseInt(answer[i+1]); //이게 계산할 값들
        if(index1 === '+'){
            result += index2;
        }else{
            result -= index2;
        }
    }
    return result;
}

//사실 엄청 쉬운 문제일줄 알았는데 생각보다 애먹었다 ㅠㅠ eval라는 엄청 쉽게 푸는 방법도 있었으나
//구글링 하자마자 쓰지말라는 얘기가 많아서 결국 인자들 하나하나 비교하는 방법을 찾아서 풀었다
//솔직히 길어져서 헷갈리는 부분들도 있지만 이해하고 넘어간거에 의미를 두기로 했다

/*두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 
solution 함수를 완성해주세요 */

function solution(s1, s2) {
    var answer = 0;
    for(let i = 0; i < s1.length; i ++){
        for(let j = 0 ; j < s2.length; j ++){
            if(s1[i] === s2[j]){
                answer ++;
            }
        }
    }
    
    return answer;
}

//이문제는 for문을 써서 쉽게 풀 수 있었다

function solution(s1, s2) {
    var answer = s1.filter((a) => s2.includes(a));
    return answer.length;
}
//다른 분의 풀이를 보았더니 filter를 쓰는 방법도 있었다 아직 for문에 익숙해서
//이건 생각을 못했는데 차츰차츰 풀어나가야겠다
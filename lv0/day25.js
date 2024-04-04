//<문자열 밀기>
function solution(A, B) {
    var answer = 0; //이게 총 횟수임
    let Aarr = [...A] //A를 새로 배치 밀기 위함

    for(let i = 0; i < A.length; i ++){
        //일단 처음부터 맞았을 때 
        if(A === B) return answer;
        //그리고 옮기는 경우
        else{
            Aarr.unshift(Aarr.pop()) //이게 마지막껄 빼서 첫번째에 넣는거임
            if(Aarr.join('') === B) return answer +=i; //이게 맞을 때 까지 위의 과정을 반복 그래서 i를 넣어줌
            //여기서 join을 넣는 이유는 뺐던 문자를 다시 넣고 모든 문자열을 합쳐주기 위함
        }
    }
    return -1; //위의 조건을 해도 맞지 않은 경우 -1을 리턴
}
//이 문제는 푸는 방법은 알았지만 unshift가 익숙하지 않았다 ㅠㅠㅠ
//글구 나는 shift를 쓰고 []에 푸쉬하는 방법을 택했는데 걍 [...A]로 한번에 할 수 있다는 것도 깨달았다

//<종이자르기>
function solution(M, N) {
    return M * N -1;
}
//첨엔 M이랑 N을 1로 만든다음 더 큰 수는 *2를 해서 구하려고 했는데 예시로 주어진 애들은 보니 걍 둘이 곱하고 -1하면
//답이길래 한번 해봤더니 맞쳤다 ㅋㅋㅋ


// <다음에 올 숫자>
function solution(common) {
    let g = common[1] - common[0]; // 등차수열의 공차
    let d = common[1] / common[0]; // 등비수열의 공비
    
    // 등차수열일 경우
    if (common[2] - common[1] === g) {
        return common[common.length - 1] + g;
    }
    // 등비수열일 경우
    else if (d !== 1) {
        return common[common.length - 1] * d;
    }
}
//맨 처음엔 배열을 거꾸로 뒤집에서 [0]에 공차든 공비든 해서 unshift하는 방법을 생각했는데 length-1을 하면 됐었다 ㅠㅠ

//<연속된 수의 합>
function solution(num , total) {
    var answer = [];
    let start = Math.ceil(total/num - (num-1)/2)

    for(let i = 0; i < num; i ++){
        answer.push(start + i)
    }
    return answer;
}

//이문제는 첨엔 이분 분할로 하려고 했는데 찾아보니 처음 숫자를 구하면 됐었다
//처음 숫자는 가우스 공식을 이용해서 풀수 있었다
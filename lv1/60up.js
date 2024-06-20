//포켓몬
function solution(nums) {
    var answer = [...new Set(nums)];
    let newnum = nums.length/2
    if(newnum >= answer.length) return answer.length;
    else return newnum;
}
//이제 정답률 60%대로 가서 긴장했는데 잘풀려서 기분이 좋았다 ㅎㅎ

//2016년
function solution(a, b) {
    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var answer = new Date(2016,a-1,b);
    let result = answer.getDay();
    return days[result];
}
//이 문제는 어렵진 않았는데 date() 객체를 올만에 사용해서 오래 걸렸다ㅠ

//모의고사
function solution(a, b) {
    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var answer = new Date(2016,a-1,b);
    let result = answer.getDay();
    return days[result];
}
//이 문제는 어렵진 않았는데 date() 객체를 올만에 사용해서 오래 걸렸다ㅠ

//모의고사
function solution(answers) {
    var answer = [];
    let fir = [1, 2, 3, 4, 5];
    let sec = [2, 1, 2, 3, 2, 4, 2, 5 ];
    let thr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let cnt01 = 0;
    let cnt02 = 0;
    let cnt03 = 0;
    
    for(let i = 0; i < answers.length; i ++){
        if(answers[i] === fir[i % fir.length]) cnt01++
        if(answers[i] === sec[i % sec.length]) cnt02++
        if(answers[i] === thr[i % thr.length]) cnt03++
    }

    const maxstd = Math.max(cnt01 ,cnt02 ,cnt03)
    if (maxstd === cnt01) answer.push(1)
        if (maxstd === cnt02) answer.push(2)
            if (maxstd === cnt03) answer.push(3)

                return answer;
}
// i% fir.length 를 사용하면 계속해서 같은 배열을 순환한다는 것을 첨 알게 된 문제였다
// 더 짧게 푼 사람도 있을줄 알았는데 대부분 다 비슷한 거 같다

//과일장수
function solution(k, m, score) {
    var answer = 0;
    let maxscore = score.sort((a,b)=> b-a)
    let tmp =[];

    for(let i= 0; i < maxscore.length; i+=m){
        tmp.push(maxscore.slice(i,i+m)) 
    }
    
    for(let j= 0; j < tmp.length; j++){
        if(tmp[j].length === m)answer += tmp[j][m-1] * m
    }
    return answer;
}
/*시간이 오래걸리긴 했지만 문제를 풀어서 기분이 좋다
나는 tmp라는 임시배열을 만들어서 문제를 풀었는데 안쓰고 조금 더 짧게 푸는 방법도 있었다
slice 함수가 아직은 익숙하지 않은데 잘 사용해야겠다*/


//기사단의 무기
function solution(number, limit, power) {
    let answer = 0;

    //먼저 1부터 number 구하기
    for(let i =1; i<= number; i++){
        let cnt =0; //이게 약수 구하는 것
        for(let j=1; j <= Math.sqrt(i); j++){
            if(i % j === 0){
                cnt ++;
            }
            if(j !== i/j){
                cnt ++;
            }
        }
    
        //여기부터 이제 최종정답 구하기
        if(cnt >limit){answer += power;
        }else{ answer += cnt
        }
    }
    return answer;
}
/*약수 구하는 for문에 대해 알게 되었고 그동안은 귀찮아서 if나 else쓸때 
괄호를 사용하지 않았는데 이 문제로 인해 중요성을 깨달았다*/


//소수 찾기
function solution(nums) {
    let cnt = 0;
    
    for(let i = 0; i < nums.length-2; i ++){//이게 첫번째 수
        for(let j = i+1; j < nums.length-1; j++){//이게 두번째 수
            for(let k= j+1; k < nums.length; k ++){//이게 세번째 수
                let result = nums[i] + nums[j] + nums[k]; //이게 전체 더한 것
                cnt ++;

               for(let n =2; n <= Math.sqrt(result); n++ ){
                if(result % n === 0){
                    cnt --;
                    break;
                }
               }
            }
        }
    }
    return cnt;
}
/*소수 찾는 문제는 많이 풀어봤는데 n개의 수 중 3가지 수를 뽑아서 고르는 거 + 
올만에 풀어보는 코테때문에 오래걸렸던 문제였다 */

//소수찾기
function solution(n) {
    //n의 크기만큼 true 채워넣기
    let answer = new Array(n+1).fill(true);

    //0과1은 소수가 아니므로 false
    result[0] = false;
    result[1] = false;

    //소수 판별
    for(let i = 2; i <= Math.sqrt(n); i++){
       if(result[i]){
        //여기가 배열인지 판별하는 것
        for(let j = i*i; j <=n; j +=i){
            result[i] = false; //배열이면 소수이므로 false
        }
       }
    }

    //소수 찾기
    let cnt = 0;
    for(let i =2; i <=n; i ++){
        if(result[i]){
            cnt++;
        }
    }
    return cnt;
}
/*사실 그동안은 알고리즘을 딱히 알고있지 않아도 풀리는 문제가 대부분이었는데
이런 문제가 나오니 알고리즘의 중요성(?)을 알게 되었다.
이 폿팅을 적는 이유도 에라토스테네스의 체 알고리즘에 대해 까먹지 않기 위함
앞으로 알고리즘을 이용해서 푸는 문제가 보이면 알고리즘을 이용해서 문제를 풀어야 겠다*/
//최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

function solution(array) {
    let map = new map(); //map을 사용

    for (let num of array) {
        map.set(num, (map.get(num) || 0) + 1); //중복 체크 후 +1 추가
    }

    let maxCount = Math.max(...map.values()); //가장 많이 나온 수 찾기
    // mostFrequentNumber 이게 가장 많이 나온 수
    let mostFrequentNumber = Array.from(map.keys()).find(key => map.get(key) === maxCount);

    return (map.get(mostFrequentNumber) === 1) ? mostFrequentNumber : -1;
}

//정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.
//나는 배열을 하고 홀수를 sort를 이용해서 나열하는 걸 생각했는데 더 쉬운 방법도 있었다....
//바로 for문을 이용해서 1부터 시작해서 2씩 커지게 하는거 ....
function solution2(n){
    let min = [];
    for (let i=1; i<=n; i+=2){
         min.push(i);
    }
    return min;
}

//머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

/*나는 7의 배수인지 확인 맞으면 나누기 7해서 몫 아니면 몫 반올림한다음 +1 
그리고 7보다 작은 경우 이케해서 풀었는데 80점 나오는 거임 ㅜㅜ
알고보니 더 쉬운 방법이 있었음 ... 바로 ceil함수였음.... */
function solution3(n){
    return Math.ceil(n/7);
}
//나는 if문 써서 그래도 10n줄 나왔는데 화살표 함수를 사용하면 한줄이였음 ㅠㅠ
//const solution3 = (n) => Math.ceil(n/7);
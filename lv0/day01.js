/* -두 수의 합-
정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 soltuion 함수를 완성해주세요.
*/

 function solution(num1,num2){
     return num1 + num2;
 }

//다른 사람의 풀이
const soltuion = (num1 ,num2) => num1 + num2;



// -두 수의 차-
const soltuion2 = (num1,num2) => num1 - num2;

// 두 수의 곱
const soltuion3 = (num1,num2) => num1 * num2;

// 두 수의 몫
const soltuion4 = (num1,num2) => Math.floor(num1 / num2);

//두수의 나눗셈
//정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.

const solution = (num1, num2) => Math.floor((num1 / num2) *1000)
// Math.floor(num1 / num2 *1000) 이렇게도 가능함


//숫자 비교하기
//정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
function soltuion5 (num1,num2){
    if (num1 === num2){
        return 1;
    }else if(num1 != num2){
        return -1;
    }
}

//분수의 덧셈
/*첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요. */

//기약 분수 만들기
function fnGCD(a, b){
    return (a%b)? fnGCD(b, a%b) : b;
}
//통분 
function solution(denum1, num1, denum2, num2) {
    let denum = denum1*num2 + denum2*num1;
    let num = num1 * num2;
    let gcd = fnGCD(denum, num); //최대공약수

    return [denum/gcd, num/gcd];
}
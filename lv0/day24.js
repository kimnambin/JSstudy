//<치킨 수 더하기>
function solution(chicken) {
    var answer = 0; // 서비스 치킨
    var coupons = 0; //가지고 있는 쿠폰 수

    // 0이 있는 한 계속 반복
    while (chicken > 0) {
        //제일 먼저 치킨 수 만큼 쿠폰에 추가
        coupons += chicken;
        chicken = 0;
        
        // 쿠폰으로 받을 수 있는 서비스 치킨 수 계산
        var service = Math.floor(coupons / 10);
        
        // 서비스 치킨을 주문하고 쿠폰 갱신
        answer += service;
        coupons -= service * 10;
        
        // 새로운 쿠폰 발급
        chicken += service;
    }

    return answer;
}
//솔직히 쉽게 풀릴줄 알았는데 서비스로 받은 치킨에서도 쿠폰이 발급되가지고 생각보다 고생했던 문제였다 ㅠㅠ

//<2진수 더하기>
function solution(bin1, bin2) {
    return (parseInt(bin1,2) + parseInt(bin2,2)).toString(2);
}
//이번 기회로 잊고 있었던(?) 2진수 덧셈을 다시 알게 되었고 결론적으론 풀진 못했지만
//parseInt 와 toString을 사용하면 2진수로 만들어서 쉽게 풀 수 있다는 것을 알 수 있었다.

//<A로 B 만들기>
function solution(before, after) {
     
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
 }
 //요즘 문제가 어려워져서 내 힘으로 푸는 문제가 거의 없었는데 정말 올만에 내 힘으로 스스로 푼 문제라 기분이 좋다 ㅎㅎ

//<k의 개수>
function solution(i, j, k) {
    let answer = 0;

    for (let z = i; z <= j; z++) {
        let numStr = String(z); 
        for (let digit of numStr) {
            if (digit === String(k)) answer++;
        }
    }

    return answer;
}
//이 문제는 답에 근접하게는 왔으나 최종적으론 풀지 못했던 문제였다 ㅠㅠ
// k도 문자열로 바꿨어야 했는데 그걸 안해서 풀지 못했다 ㅠㅠ

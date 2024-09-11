function solution(survey, choices) {
    var answer = '';
    
    let result = {
       'R' : 0 , 'T' : 0, 
       'C' : 0 , 'F' : 0,
       'J' : 0 , 'M' : 0,
       'A' : 0,  'N' : 0,
    }
    
    let new_choices = {
       1 : 3 , 2 : 2, 
       3 : 1 , 4 : 0,
       5 : 1 , 6 : 2,
       7 : 3
    }
    
    for(let i =0; i < survey.length; i++){
        let new_survey = survey[i].split('')
        if(choices[i] < 4){
            result[new_survey[0]] += (new_choices[choices[i]])
        }else{
            result[new_survey[1]] += (new_choices[choices[i]])
        }
        
    }
    answer += result['R'] >= result['T'] ? 'R' : 'T'
    answer += result['C'] >= result['F'] ? 'C' : 'F'
    answer += result['J'] >= result['M'] ? 'J' : 'M'
    answer += result['A'] >= result['N'] ? 'A' : 'N'
    
    return answer;
}
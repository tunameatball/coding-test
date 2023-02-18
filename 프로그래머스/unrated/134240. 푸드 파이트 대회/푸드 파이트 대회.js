function solution(food) {
  var answer = '0';

  for (let index = food.length - 1; index >= 1; index--) {
    const number = String(index).repeat(parseInt(food[index]/2))
    answer = `${number}${answer}${number}`
  }

  return answer;
}
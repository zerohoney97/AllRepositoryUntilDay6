let n = 1;
let m = 1;

let section = [1];

function solution(n, m, section) {
  let whole = [];
  let newWhole = [];
  var answer=0;
  for (let i = 1; i <= n; i++) {
    whole.push(i);
  }

  while (section.length != 0) {
    
    let firstSection = section.shift();
    if (newWhole.includes(firstSection)) {
    } else {
      let tempIndex = whole.indexOf(firstSection);
      if (whole.length - tempIndex < m-1) {
        answer++;
        continue
      }

      newWhole.push(...whole.splice(tempIndex, m));
      console.log(newWhole);
      answer++;
    }
  }

  return answer;
}
console.log(solution(n, m, section));

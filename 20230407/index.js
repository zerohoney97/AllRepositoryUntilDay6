let s = "2qWeQwE 2e EEE              S";

function solution(s) {
  let newS = s.split(" ");
  console.log(newS);
  let resultS = newS.map((a) => {
    if (a == "") {
      return a
    } else {
      let lowerS = a.toLowerCase();
      if (isNaN(parseInt(lowerS[0]))) {
        let temp = lowerS.replace(lowerS[0], lowerS[0].toUpperCase());
        console.log(temp);
        return temp;
      } else {
        return lowerS;
      }
    }
  });

  return resultS.join(" ");
}
console.log(solution(s));

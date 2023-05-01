

function solution(A,B){
  var answer = 0;
  let i=0;
  while(i<A.length){
      let minA=Math.min(...A);
      let indexA=A.indexOf(minA);
      console.log(indexA);
    A=A.splice(indexA,1);
      let maxB=Math.max(...B);
      let indexB=A.indexOf(maxB);
      
      B=B.splice(indexB,1);
      answer+=minA*maxB;
      console.log(A,B);
      i++
  }

  return answer;
}
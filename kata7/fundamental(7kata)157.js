/*In this kata, you will write an arithmetic list which is basically a list that contains consecutive terms in the sequence.
You will be given three parameters :

first the first term in the sequence
c the constant that you are going to ADD ( since it is an arithmetic sequence...)
l the number of terms that should be returned*/



function seqlist(first, c, l) {
  // Thou shalt begin !
  let result = [];
  for(let i = 0; i< l; i++){
    result.push(first);
    first +=c
  }
  return result;
}
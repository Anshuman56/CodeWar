/*Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"*/


function absentVowel(x){
let v = 'aeiou';
let s = x.split('').filter(item => v.includes(item)).filter((item, index, self) => self.indexOf(item) === index).sort().join('');
let f = v.split('').filter((item, index) => !s.includes(item)).join('');
  return v.indexOf(f)
}
/*The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?*/


function missingNo(nums) {
 let s = nums.sort((a, b) => a - b)
  if(s[s.length - 1] === 100)
  return s.filter((item , index) => item !== index)[0] - 1
}
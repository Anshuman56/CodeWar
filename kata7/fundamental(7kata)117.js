/*Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

For example:

[ 1, 2, 3] ==> 6

[ 1, 3, 8, 1, 8] ==> 12

[ -1, -1, 5, 2, -7] ==> -1

[] ==> null*/


function uniqueSum(lst){
  //your magic code goes here
  if(lst.length === 0)
    return null;
  return lst.filter((item, index, self) => self.indexOf(item) === index).reduce((acc, item) => acc + item, 0);
}
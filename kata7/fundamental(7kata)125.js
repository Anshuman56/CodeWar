/*Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

Examples
[1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
[0, 1, 2, 3, 4, 5]                ==>  []*/


function duplicates(arr) {
  //TODO: return the array of duplicates from arr
  return arr.filter((item, index, self) => self.indexOf(item) !== index).filter((item, index, self) => self.indexOf(item) === index)
}
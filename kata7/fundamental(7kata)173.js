/*Your goal is to implement the method meanVsMedian which accepts an odd-length array of integers and returns one of the following:

'mean' - in case mean value is larger than median value
'median' - in case median value is larger than mean value
'same' - in case both mean and median share the same value
Reminder: Median

Array will always be valid (odd-length >= 3)*/


function meanVsMedian(numbers) {
  let mean = 0;
  let median = 0
    const arrSorted = numbers.sort((a, b) => a - b);
    const middleIndex = Math.floor(arrSorted.length / 2);
    if (arrSorted.length % 2 === 0) {
        median = (arrSorted[middleIndex - 1] + arrSorted[middleIndex]) / 2;
    } else {
       median = arrSorted[middleIndex];
    }
 let sum = numbers.reduce((a, b) => a + b, 0);
    mean = sum / numbers.length;
  
  return mean > median ? 'mean': mean === median? 'same': 'median'
}
/*You love coffee and want to know what beans you can afford to buy it.

The first argument to your search function will be a number which represents your budget.

The second argument will be an array of coffee bean prices.

Your 'search' function should return the stores that sell coffee within your budget.

The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.

*/


function search(budget, prices) {

// return array of prices that are within budget
return prices.sort((a, b) => a - b).filter(item => item <= budget).join(',')
}
/*Write a function that will take a key of X and place it in the middle of Y repeated N times.

Extra challege (not tested): You can complete this with under 70 characters without using regex. Challenge yourself to do this. It wont be best practices but it will work.

Rules:

If X cannot be placed in the middle, return X.

N will always be > 0.

Example:

X = 'A';

Y = '*';

N = 10;

Y repeated N times = '**********';

X in the middle of Y repeated N times = '*****A*****';*/


function middleMe(N, X, Y){
    //get a working solution then try to make it less than 70 characters!
  let arr = []
  for(let i = 0; i < N; i++){
    arr.push(Y);
  }
  arr = arr.join('')
  if(arr.length % 2 === 0)
  return arr.slice(0,arr.length / 2) + X + arr.slice(arr.length / 2);
  return X
}

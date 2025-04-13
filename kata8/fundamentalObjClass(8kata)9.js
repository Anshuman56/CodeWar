/*Hey Codewarrior!

In the previous kata, you have implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code one (or more) such that one can instantiate an object via it, handling either no arguments or a single integer.

Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!

The constructor taking no arguments should assign 0 to Cube's Side property.
*/


// This Cube class needs help
// Implement the constructor so that it can take an integer for the side or no args
class Cube {
  constructor(side){
    if(side === 0 || side === undefined)
    this.side = 0;
    else if(side < 0)
      this.side = Math.abs(side);
    else
      this.side = side;
  }
  
  getSide() {
    return this.side; 
  }
  setSide(n = 0) {
    this.side = Math.abs(n);
  }
}
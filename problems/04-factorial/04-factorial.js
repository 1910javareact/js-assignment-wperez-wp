/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(someNum) {
    if (someNum < 0) return //Termination
    if (someNum === 0) return 1 //Base Case
    return (someNum * factorial(someNum - 1)) // Recursion
  }
  someNum = 5
  console.log (factorial(someNum))
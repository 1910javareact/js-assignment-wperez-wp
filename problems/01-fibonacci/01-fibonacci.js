//prob 1. Fibonacci
    
    function fib(n) {
    let o = 0
    let p = 1 
    let temp = 0
    //Iterate (n to 1), adding.
    for (let i=n; i>0 ; i--) {
        temp = o
        o = o + p
        p = temp
    }
    return o
  }
let n = 6
console.log(`The nth number is equal to fib= ${fib(n)}`)
                

/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
  if ((!(someNum & 1 ))){ 
      return true
    } else{
        return false
    }
} 
console.log(isEven(40))

// 2. Bubble Sort
function bubbleSort(numArray)
{
    let swapped
    let arr = numArray
    n = numArray.length -1
    do {
        swapped = false
        for (let i=0; i < n; i++)
        {
            if (arr[i] < arr[i+1])
            {
               let temp = arr[i]
               arr[i] = arr[i+1]
               arr[i+1] = temp
               swapped = true
            }
        }
        n--
    } while (swapped)
 return arr 
}
numArray = (bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))
console.log(bubbleSort(numArray))

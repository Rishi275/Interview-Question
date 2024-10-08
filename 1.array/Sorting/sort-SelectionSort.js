// bubble sort = it sort smaller element at the start
/* it is sorting algorithem where the first element compare itself to every elements in the array if it found less to that element than it swapped with that element

      Selection Sort:
      Worst-case: O(n²)
      Best-case: O(n²)
      Average-case: O(n²)

*/


let array = [-1, 1, 4, 6, 2, 5, 3, 9, 0, 2, 5, 8]
let SelectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;//i =0
        for (let j = i + 1; j < array.length; j++) {// iterate from next index of array
            if (array[minIndex] >= array[j]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]] //swap
        }
    }
    return array;
}
let newSortedArray = SelectionSort(array).join(" ")
console.log("Sorted Array: ", newSortedArray)

// ------------------------------------

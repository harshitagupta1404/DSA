// Search element in an array and return index. Return -1 if not found.
function searchElement(arr,ele) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === ele)
            return i;
    }
    return -1;
}

const arr = [1, 2, 3, 4, 5]
let isPresent = searchElement(arr, 7)
console.log(isPresent);

// Count number of negative integers in an array
function negative(arr) {
    let ctr = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0)
            ctr++;
    }
    console.log(ctr);
}

const arr = [-13, 1, 2, 3, 4, 5,-8,-7,-12]
negative(arr)

// Find largest number in an array
function largest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > largest)
            largest=arr[i];
    }
    console.log(largest);
}

const arr = [-13, 1, 2, 3, 4, 5,-8,-7,-12]
largest(arr)

// Find second largest number in an array
    let largest = -Infinity, secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i]!==largest) {
            secondLargest = arr[i];
        }
    }
    console.log(secondLargest);
}

const arr = [-13, 1, 2, 3, 4, 5,-8,-7,-12,5]
secondLargest(arr)

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    
    const povernut = arr[arr.length - 1];
    const left = [];
    const right = [];

    
    for (let i = 0; i < arr.length - 1; i++) {
        
        if (arr[i] < povernut) {
            left.push(arr[i]);
        } 
        
        else {
            right.push(arr[i]);
        }
    }

    
    return [...quickSort(left), povernut, ...quickSort(right)];
}

// Пример 
const unsortedArray = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);

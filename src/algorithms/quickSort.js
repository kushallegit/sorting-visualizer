export function quickSort(array) {
    if (array.length <= 1) return array;

    const pivot = array[array.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length - 1; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

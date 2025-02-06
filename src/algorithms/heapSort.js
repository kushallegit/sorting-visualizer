export function heapSort(array) {
    let arr = [...array];
    buildMaxHeap(arr);

    for (let i = arr.length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, 0, i);
    }

    return arr;
}

function buildMaxHeap(arr) {
    const start = Math.floor(arr.length / 2 - 1);
    for (let i = start; i >= 0; i--) {
        heapify(arr, i, arr.length);
    }
}

function heapify(arr, index, size) {
    let largest = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if (left < size && arr[left] > arr[largest]) largest = left;
    if (right < size && arr[right] > arr[largest]) largest = right;

    if (largest !== index) {
        [arr[index], arr[largest]] = [arr[largest], arr[index]];
        heapify(arr, largest, size);
    }
}

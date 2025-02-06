import React, { useState, useEffect } from 'react';
import { mergeSort } from '../algorithms/mergeSort';
import { quickSort } from '../algorithms/quickSort';
import { bubbleSort } from '../algorithms/bubbleSort';
import { heapSort } from '../algorithms/heapSort';
import './SortingVisualizer.css';

const SortingVisualizer = () => {
    const [array, setArray] = useState([]);
    const [algorithm, setAlgorithm] = useState('Merge Sort');

    useEffect(() => {
        resetArray();
    }, []);

    const resetArray = () => {
        const newArr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 500));
        setArray(newArr);
    };

    const handleSort = () => {
        let sortedArray;
        switch (algorithm) {
            case 'Merge Sort':
                sortedArray = mergeSort(array);
                break;
            case 'Quick Sort':
                sortedArray = quickSort(array);
                break;
            case 'Bubble Sort':
                sortedArray = bubbleSort(array);
                break;
            case 'Heap Sort':
                sortedArray = heapSort(array);
                break;
            default:
                return;
        }
        setArray([...sortedArray]);
    };

    return (
        <div className="container">
            <h1>Sorting Algorithm Visualizer</h1>
            <div className="buttons">
                <button onClick={resetArray}>Reset Array</button>
                <button onClick={handleSort}>Sort</button>
                <select onChange={(e) => setAlgorithm(e.target.value)}>
                    <option>Merge Sort</option>
                    <option>Quick Sort</option>
                    <option>Bubble Sort</option>
                    <option>Heap Sort</option>
                </select>
            </div>
            <div className="array-container">
                {array.map((val, idx) => (
                    <div key={idx} className="bar" style={{ height: `${val}px` }}></div>
                ))}
            </div>
        </div>
    );
};

export default SortingVisualizer;

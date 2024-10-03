
/**
 * Created by Anuprabh_Singh 
 */

export { BinaryHeap }
class BinaryHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    empty() {
        return this.size() === 0;
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyInsert();
    }

    heapifyInsert() {
        let index = this.size() - 1; // index where the current value is inserted

        while (index > 0) {
            let currElement = this.heap[index];
            let parentIndex = Math.floor((index - 1) / 2);
            let parentElement = this.heap[parentIndex];

            if (parentElement[0] > currElement[0]) break;

            this.heap[index] = parentElement;
            this.heap[parentIndex] = currElement;
            index = parentIndex;
        }
    }

    extractMax() {
        const maxi = this.heap[0];
        const temp = this.heap.pop();

        if (!this.empty()) {
            this.heap[0] = temp;
            this.heapifyExtract(0);
        }
        return maxi;
    }

    heapifyExtract(index) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let largest = index;
        let length = this.size();

        if (left < length && this.heap[left][0] > this.heap[largest][0]) {
            largest = left;
        }
        if (right < length && this.heap[right][0] > this.heap[largest][0]) {
            largest = right;
        }
        if (largest != index) {
            let temp = this.heap[largest];
            this.heap[largest] = this.heap[index];
            this.heap[index] = temp;
            this.heapifyExtract(largest);
        }
    }
}

// let mxheap = new BinaryHeap();

// mxheap.insert([4, 1]);
// mxheap.insert([3, 1]);
// mxheap.insert([6, 1]);
// mxheap.insert([1, 1]);

// while (!mxheap.empty()) {
//     let mx = mxheap.extractMax();
//     console.log(mx);
// }

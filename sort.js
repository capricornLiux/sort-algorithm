class ArrayList {
    constructor() {
        this.array = []
    }
    insert(item) {
        this.array.push(item);
    }
    toString() {
        return this.array.join();
    }
    // 冒泡排序
    bubleSort() {
        const length = this.array.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1; j++) {
                if (this.array[j] > this.array[j + 1]) {
                    this.swap(this.array, j, j + 1);
                }
            }
        }
    }
    // 冒泡排序的优化
    bubleSortOptimise() {
        const length = this.array.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                if (this.array[j] > this.array[j + 1]) {
                    this.swap(this.array, j, j + 1)
                }
            }
        }
    }
    // 交换数组的两个元素
    swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j]
        array[j] = temp
    }
}

export default ArrayList;
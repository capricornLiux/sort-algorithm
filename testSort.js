import ArrayList from './sort'

let arrayList = new ArrayList();

for (let i = 10000; i > 0; i--) {
    arrayList.insert(i);
}

console.log(arrayList.array);

console.log(arrayList.toString());

let time1 = new Date();
// arrayList.bubleSort();
arrayList.bubleSortOptimise();
let time2 = new Date();
console.log(time2 - time1);

console.log(arrayList.toString());
const array = [1, 2, 3, 4];

const calculateSum = array.reduce((total, num) => total + num, 0);

const calculateProduct = array.reduce((total, num) => total * num, 1);
console.log(calculateSum);
console.log(calculateProduct);
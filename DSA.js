let arr = [2, 3, 4, 4, 5, 6, 6, 6, 7, 7, 8, 8, 8, 13, 2, 4, 4, 10];

const Unique = arr.filter((el, index)=> arr.indexOf(el)===index);

console.log(Unique);

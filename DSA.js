let arr = [
  2, 3, 4, 4, 5, 6, 6, 6, 7, 7, -1, -7, -7, -7, 8, 8, 8, 13, 2, 4, 4, 10,
];

const Unique = arr
  .filter((el, index) => arr.indexOf(el) === index)
  .sort((a, b) => a - b);

// console.log(Unique);

const piles = [30, 11, 23, 4, 20];
let Max = Math.max(...piles);
let h = 8;
// console.log(Max);
// for(let i=1;i<=Max;i++){
//   if(h % i !== 0 && i > h ){
//       // console.log(i + 1 )
//   }
// }

//Binary Search
// let nums = [-1, 0, 3, 5, 9, 12],
//   target = 9;

const binarySearch = (nums, target) => {
  let S = 0,
    E = nums.length - 1;

  while (S <= E) {
    let Mid = Math.ceil((S + E) / 2);

    if (nums[Mid] === target) {
      console.log(Mid);
      return;
    } else if (nums[Mid] < target) {
      S = Mid + 1;
    } else {
      E = Mid - 1;
    }
  }
  console.log(-1);
};

// binarySearch(nums, target);

//33. Search in Rotated Sorted Array
let nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;

var search = function (nums, target) {
  let S = 0,
    E = nums.length - 1;

  while (S <= E) {
    let Mid = Math.ceil((S + E) / 2);
    if (nums[Mid] === target) {
      console.log(Mid);
      return;
    }
    if (target >= nums[0] && nums[Mid] < nums[0]) {
      E = Mid - 1;
    } else if (target < nums[0] && nums[Mid] >= nums[0]) {
      S = Mid + 1;
    } else {
      if (target < nums[Mid]) {
        E = Mid - 1;
      } else {
        S = Mid + 1;
      }
    }
  }
  console.log(-1);
};

// search(nums, target);

//74. Search a 2D Matrix

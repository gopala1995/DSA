
// Sliding Window SubArray largest Sum

const getSubarraySum = (num, k) => {

    let N = num.length;
    let result = -Infinity;

   for(let i=0;i<k;i++){
   let sum = 0;

    for(let j=i;j<i+k;j++){
        
           sum +=  num[j]    
        
     if(sum > result){
        result = sum
     }
        
    }
  }
  console.log(result)
}


// getSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)

// Palindrome string

let str = "racecar";

const ispalindrome = (str) => {
let prev = ""
  for(let i = str.length -1; i>=0 ;i--){
    prev += str[i]
  }
  if(prev === str){
    console.log(true)
  }else{
    console.log(false)
  }

  let left = 0;
  let right = str.length - 1;

  while(left < right){
    if(str[left] !== str[right]){
      console.log(false)
      return;
    }
    left++;
    right--;
  }
  console.log(true)
}

ispalindrome(str)
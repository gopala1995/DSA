
// Sliding Window SubArray largest Sum

const getSubarraySum = (num, k) => {

    let N = num.length;
    let result = -Infinity;

   for(let i=0;i<N-k;i++){
   let sum = 0;
   var ans = []

    for(let j=i;j<i+k;j++){
        
           sum +=  num[j]    
           ans.push(num[j]) 
        
     if(sum > result){
        result = sum
     }
        
    }
  }
  console.log(result, ans)
}


getSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)
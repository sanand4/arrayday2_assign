function arrayPairSum(nums) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order
  let sum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i]; // Add the minimum element of each pair to the sum
  }

  return sum;
}

// Test case
const nums = [1, 4, 3, 2];
console.log(arrayPairSum(nums));

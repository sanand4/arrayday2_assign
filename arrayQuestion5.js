function maximumProduct(nums) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order

  const n = nums.length;
  const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3]; // Product of the three largest elements
  const product2 = nums[0] * nums[1] * nums[n - 1]; // Product of the two smallest elements and the largest element

  return Math.max(product1, product2);
}

// Test case
const nums = [1, 2, 3];
console.log(maximumProduct(nums));

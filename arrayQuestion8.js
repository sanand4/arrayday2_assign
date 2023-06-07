function minimumScore(nums, k) {
  const n = nums.length;
  let min = Math.min(...nums);
  let max = Math.max(...nums);

  if (max - min <= 2 * k) {
    return 0;
  } else {
    min += k;
    max -= k;
    min = Math.min(min, Math.min(...nums));
    max = Math.max(max, Math.max(...nums));
    return max - min;
  }
}

// Test case
const nums = [1];
const k = 0;
console.log(minimumScore(nums, k));

function findLHS(nums) {
  const frequencyMap = new Map();
  let maxLength = 0;

  // Count the frequency of each number
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Check for each number if there exists a complementary number
  for (const [num, frequency] of frequencyMap) {
    if (frequencyMap.has(num + 1)) {
      const combinedLength = frequency + frequencyMap.get(num + 1);
      maxLength = Math.max(maxLength, combinedLength);
    }
  }

  return maxLength;
}

// Test case
const nums = [1, 3, 2, 2, 5, 2, 3, 7];
console.log(findLHS(nums));

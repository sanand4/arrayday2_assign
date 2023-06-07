function distributeCandies(candyType) {
  const uniqueTypes = new Set(candyType);
  const maxCandies = candyType.length / 2;

  return Math.min(uniqueTypes.size, maxCandies);
}

// Test case
const candyType = [1, 1, 2, 2, 3, 3];
console.log(distributeCandies(candyType));

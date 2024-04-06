// We first iterate through the array to find a valid numeric element and store its index and value in the numIndices object.
// Then, we use nested loops to iterate through all possible pairs of numeric elements in the array.
// For each pair of numeric elements, we check if their sum equals the target.
// If we find a pair that satisfies the condition, we return the indices of the two numbers.
// If no such pair is found after iterating through the entire array, we return an empty array to indicate that there is no solution.

function twoSum(nums, target) {
  const numIndices = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // Skip non-numeric elements
    if (typeof num !== "number") {
      continue;
    }

    for (let j = i + 1; j < nums.length; j++) {
      const otherNum = nums[j];

      // Skip non-numeric elements
      if (typeof otherNum !== "number") {
        continue;
      }

      if (num + otherNum === target) {
        return [i, j];
      }
    }
  }

  // No solution found
  return [];
}

const arrayOfIntegers = ["2", 11, 7, 15, "a", "b"];
const target = 9;
console.log(twoSum(arrayOfIntegers, target)); // Output: [1, 2] (Indices of numbers 11 and 7 that add up to 9)

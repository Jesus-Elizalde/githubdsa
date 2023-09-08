/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = {};

  for (let i in nums) {
    const ele = nums[i];
    const diff = target - ele;

    if (hash[ele]) {
      return [i, hash[ele]];
    } else {
      hash[diff] = i;
    }
  }
};

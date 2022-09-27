/*Given a sorted array of distinct integers and a target value,
return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1 */
function searchInsertPosition(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i;
        }
        else if (nums[i] > target) {
            return i;
        } else if (i == nums.length - 1) {
            return i + 1;
        }
    }
}
console.log(searchInsertPosition([1,3,5,6],5));
console.log(searchInsertPosition([1,3,5,6],2));
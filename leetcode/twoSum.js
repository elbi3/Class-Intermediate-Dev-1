function twoSum(nums, target) {
    nums.sort();
    let myMap = new Map();
    for(let i = 0; i <= nums.length(); i++) {
        if(nums[i] <= target) {
            map.set(`${nums[i]}`, 0);
        } else if (nums[i] > target) {
            break;
        }
    }
    
}
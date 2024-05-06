function containsDuplicate(nums) {
    let numsSet = new Set();
    for (let num of nums) {
        numsSet.add(num);
    }
    return numsSet.size != nums.length;
}

console.log(containsDuplicate([1,2,3,1]));
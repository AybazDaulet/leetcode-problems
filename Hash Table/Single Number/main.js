function singleNumber(nums) {
    let numsSet = new Set();
    for (let num of nums) {
        if (numsSet.has(num)) {
            numsSet.delete(num);
        } else {
            numsSet.add(num);
        }
    }
    const iterator = numsSet.values();
    return iterator.next().value;
}
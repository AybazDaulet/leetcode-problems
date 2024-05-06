function intersection(nums1, nums2) {
    let set1 = new Set(), set2 = new Set(), set3 = new Set();
    for (let num of nums1) {
        set1.add(num);
    }
    for (let num of nums2) {
        set2.add(num);
    }
    for (let value of set1) {
        if (set2.has(value)) {
            set3.add(value);
        }
    }
    return Array.from(set3);
}

console.log(intersection([1,2,2,1], [2,2]))
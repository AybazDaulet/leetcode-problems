class MyHashSet {
    constructor() {
        this.MyHashSet = [];
    }
    add(key) {
        if (!this.MyHashSet.includes(key)) {
            this.MyHashSet.push(key);
        }
    }
    contains(key) {
        return this.MyHashSet.includes(key);
    }
    remove(key) {
        if (this.MyHashSet.includes(key)) {
            const index = this.MyHashSet.indexOf(key);
            this.MyHashSet.splice(index, 1);
        }
    }
}

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
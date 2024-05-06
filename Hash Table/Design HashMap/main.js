class MyHashMap {
    constructor() {
        this.MyHashMap = [];
    }
    put(key, value) {
        if (this.MyHashMap.length >= 1) {
            for (let pair of this.MyHashMap) {
                if (pair[0] == key) {
                    pair[1] = value;
                    return this.MyHashMap;
                }
            }
        }
        this.MyHashMap.push([key, value]);
        return this.map
    }
    get(key) {
        if (this.MyHashMap.length >= 1) {
            for (let pair of this.MyHashMap) {
                if (pair[0] == key) {
                    return pair[1];
                }
            }
        }
        return -1;
    }
    remove(key) {
        if (this.MyHashMap.length >= 1) {
            for (let pair of this.MyHashMap) {
                if (pair[0] == key) {
                    const index = this.MyHashMap.indexOf(pair);
                    this.MyHashMap.splice(index, 1);
                }
            }
        }
    }
}

let myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]

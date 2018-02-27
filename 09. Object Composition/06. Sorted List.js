function solve() {
    return {
        arr: [],
        size: 0,
        sort: function(){
            this.arr = this.arr.sort((a,b) => a - b)
        },

        add: function(element){
            this.arr.push(element);
            this.size++;
            this.sort();
        },
        toString: function(){
            return this.arr.join(' ')
        },
        remove: function(index){
            if(index >= 0 && index < this.arr.length){
                this.arr.splice(index,1);
                this.size--;
            }
        },
        get: function(index){
            if(index >= 0 && index < this.arr.length){
                return this.arr[index];
            }
        }
    }
}

let sortedList = solve();

console.log(`Size ${sortedList.size}`);
sortedList.add(2);
sortedList.add(-1);
sortedList.add(100);
sortedList.add(-54);
console.log(sortedList.toString());
console.log(`Size ${sortedList.size}`);

sortedList.remove(2);
console.log(sortedList.toString());
sortedList.remove(0);
console.log(sortedList.toString());

console.log(sortedList.get(0));
console.log(`Size ${sortedList.size}`);
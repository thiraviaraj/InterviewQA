// Selection Sort
var SortUtil = function (items) {
	this.items = items;
}

SortUtil.prototype.selectionSort = function () {
	var length = this.items.length;
	for (var i = 0; i < length - 1; i++) {
		var min = i;
		for (var j = i + 1; j < length; j++) {
			if (this.items[j] < this.items[min]) { //Compare the numbers
				min = j; //Change the current min number position if a smaller num is found
			}
		}
		if (min != i) {
			var tmp = this.items[i];
			this.items[i] = this.items[min];
			this.items[min] = tmp;
		}
	}
  return this.items;
}

SortUtil.prototype.binarySearch = function (value) {
    var items = this.selectionSort(this.items);
	let firstIndex  = 0;
    let lastIndex   = items.length - 1;
    let middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
      else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }

    return (items[middleIndex] != value) ? -1 : middleIndex;
}


var SortUtilObj = new SortUtil([34, 23, 12, 45, 9, 1, 24]);
console.log(SortUtilObj.selectionSort());
// Output : [1, 9, 12, 23, 24, 34, 45]
var SUObj = new SortUtil([34, 23, 12, 45, 9, 1, 24]);
console.log(SUObj.binarySearch(9));
// Output : index: 1
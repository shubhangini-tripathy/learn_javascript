var arr1 = [1, 2, 3, 4, 5, 6];
var arr2 = [0, 3, 5, 9];

// result = [0, 1, 2, 3, 4, 5, 6, 9]

var i = 0
for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
        arr2.push(arr1[i]);
    }
}

console.log(arr2);
var arr1 = [2, 3, 5, 1, 8, 9];
var arr2 = [1, 8, 9, 2, 3, 5];
result = []
// result =   [3, 11, 14, 3, 11, 14]

var i = 0
while (i < arr1.length) {
    result.push(arr1[i] + arr2[i]);
    i = i + 1;
}
console.log(result);
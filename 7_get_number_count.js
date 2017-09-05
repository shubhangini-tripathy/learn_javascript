arr = [1, 3, 6, 1, 7, 2, 3, 1, 9, 9, 7, 7]
// result = { 1: 2, 2: 1, 3: 2, 6: 1, 7: 3, 9: 2 }

result = {};
for (var i = 0; i < arr.length; i++) {
    if (arr[i] in result === false) {
        result[arr[i]] = 0;
    }
    result[arr[i]] += 1;
}
console.log(result);
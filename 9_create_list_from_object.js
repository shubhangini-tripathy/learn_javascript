var obj = { 2: 3, 4: 5, 8: 9, 10: 2 }
// var arr1 = [2, 4, 8, 10]
// var arr2 = [3, 5, 9, 2]
result1 = []
result2 = []
for (var key in obj) {
    result1.push(key);

}
console.log(result1);
for (var value in obj) {
    result2.push(obj[value]);

}
console.log(result2);

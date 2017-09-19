var a = "ashutosh tripathy";
var charset = new Set();
arr = Array.from(a);
var index = arr.length;

while (index > -1) {
    var element = a[index];
    if (charset.has(element)) {
        arr = arr.filter(item => item != element);
    } else {
        charset.add(element);
    }
    index -= 1;    
}
console.log(arr.join(""));

// arr = arr.filter(item => a.split(item).length > 1);

// while (index < a.length) {
//     var element = a[index];
//     if (charset.has(element)) {
//         a = a.filter(item => item != element);
//     } else {
//         charset.add(element);
//         index += 1;
//     }
// }




// // var result = "ashuto ripy";
// for (var i = 0; i < a.length; i++) {
//     if (a.split(a[i]).length - 1 > 1)
//         a = a.replace(a[i], "");
// }
// console.log(a);


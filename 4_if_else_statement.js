

var day1 = 9, day2 = 7;
remainder = (day1 + day2) % 7
if (remainder === 0) {
    console.log("sunday");
}
else if (remainder === 1) {
    console.log("monday");
}
else {
    console.log("other days");
}
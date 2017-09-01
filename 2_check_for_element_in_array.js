function exists() {
    var myArray = [3, 4, 5, 6, 11];
    var i = 0
    while (i < myArray.length) {
        if (myArray[i] === 33) {
            console.log(true);
            return;
        }
        i += 1;
    }
    console.log(false);
}
exists();

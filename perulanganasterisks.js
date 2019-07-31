// 1. Menyusun Barisan Bintang

var rows1 = 5;
for (var p = 0; p < rows1; p++) {
    console.log('*')
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5;
var cols2 = '';
for (var l = 0; l < rows2; l++) {
    for (var k = 0; k < rows2; k++) {
        cols2 += '*'
    }
    cols2 += '\n'
}
console.log(cols2)

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5;
var cols3 = '';
for (var j = 0; j <= rows3; j++) {
    for (var h = 0; h < j; h++) {
        cols3 += '*'
    }
    cols3 += '\n'
}
console.log(cols3)
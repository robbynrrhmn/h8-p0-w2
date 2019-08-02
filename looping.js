// 1. Melakukan Looping Menggunakan While

console.log('LOOPING PERTAMA')
var tambah = 2;
while (tambah <= 20) {
    console.log(tambah + ' ' + '- I love coding')
    tambah = tambah + 2
}

console.log('LOOPING KEDUA')
var kurang = 20;
while (kurang >= 2) {
    console.log(kurang + ' ' + '- I will become fullstack developer')
    kurang = kurang - 2
}

// 2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA')
for (var y = 1; y <= 20; y++) {
    console.log(y + ' ' + '- I love coding')
}

console.log('LOOPING KEDUA')
for (var p = 20; p >= 1; p--) {
    console.log(p + ' - I will become fullstack developer')
}

// 3. Angka Ganjil dan Genap

for (var w = 1; w <= 100; w++) {
    if (w % 2 === 0) {
        console.log(w + ' adalah angka GENAP');
    } else {
        console.log(w + ' adalah angka GANJIL');
    }
}
//kelipatan 3 dengan pertambahan 2

for (var f = 1; f < 101; f += 2) {
    if ((f % 3) === 0) {
        console.log(f + " kelipatan 3");
    } else {
        console.log('""')
    }
}

//kelipatan 6 dengan pertambahan 5

for (var f = 1; f <= 100; f += 5) {
    if ((f % 6) === 0) {
        console.log(f + ' kelipatan 6');
    } else {
        console.log('""')
    }
}

//kelipatan 10 dengan pertambahan 9

for (var f = 1; f <= 100; f += 9) {
    if ((f % 10) === 0) {
        console.log(f + ' kelipatan 10');
    } else {
        console.log('""')
    }
}
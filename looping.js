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
for (blabla = 1; blabla <= 20; blabla++) {
    console.log(blabla + ' ' + '- I love coding')
}

console.log('LOOPING KEDUA')
for (bleble = 20; bleble >= 1; bleble--) {
    console.log(bleble + ' - I will become fullstack developer')
}

// 3. Angka Ganjil dan Genap

for (var bloblo = 1; bloblo <= 100; bloblo++) {
    if (bloblo % 2 === 0) {
        console.log(bloblo + ' adalah angka GENAP');
    } else {
        console.log(bloblo + ' adalah angka GANJIL');
    }
}
//kelipatan 3 dengan pertambahan 2

for (var blibli = 1; blibli < 101; blibli += 2) {
    if ((blibli % 3) === 0) {
        console.log(blibli + " kelipatan 3");
    } else {
        console.log('""')
    }
}

//kelipatan 6 dengan pertambahan 5

for (var blibli = 1; blibli <= 100; blibli += 5) {
    if ((blibli % 6) === 0) {
        console.log(blibli + ' kelipatan 6');
    } else {
        console.log('""')
    }
}

//kelipatan 10 dengan pertambahan 9

for (var blibli = 1; blibli <= 100; blibli += 9) {
    if ((blibli % 10) === 0) {
        console.log(blibli + ' kelipatan 10');
    } else {
        console.log('""')
    }
}
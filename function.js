// 1. Tugas Pertama

function shoutOut() {
    var shoutOut = 'Halo Function!';
    return shoutOut;
}
console.log(shoutOut()) // Menampilkan "Halo Function!" di console

// 2. Tugas Kedua

function calculateMultiply() {
    var num1 = 5;
    var num2 = 6;
    return num1 * num2;
}
console.log(calculateMultiply())

// 3.. Tugas Ketiga

function processSentence(name, age, address, hobby) {
    return 'Nama saya ' + name + ',' + ' umur saya ' + age + ' tahun' + ',' + ' alamat saya di ' + address + ',' + ' dan saya punya hobby yaitu ' + hobby + '!';
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);
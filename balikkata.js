function balikKata(kata) {
    var kataGabungan = '';
    for (var kt = kata.length - 1; kt >= 0; kt--) {
        kataGabungan += kata[kt];
    }
    return kataGabungan;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
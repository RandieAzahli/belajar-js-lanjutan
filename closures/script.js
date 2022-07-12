// ? closure
// * kombinasi antara function dan lingkungan leksikal (lexical scope) di dalam function tersebut

// function init() {
//     // var nama = "Randi";
//     // var umur = 18;

//     return function (nama) {
//         console.log(nama);
//         // console.log(umur);
//     };

//     // console.dir(tampilNama);
// }

// let panggilNama = init();
// panggilNama("Sandi");

// ? kenapa pakai closures
// * untuk membuat function factories

// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Hallo ${nama}, selamat ${waktu}, semoga harimu menyenangkan ...`);
//     };
// }

// let selamatPagi = ucapkanSalam("pagi");
// let selamatSiang = ucapkanSalam("siang");
// let selamatMalam = ucapkanSalam("malam");

// selamatPagi("Randie");

// * seolah olah membuat private variabel/method

let add = (function () {
    let counter = 0;

    return function () {
        return ++counter;
    };
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());

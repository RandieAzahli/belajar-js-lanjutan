// * Execution Context => saat suatu program dijalankan
// * creation => hoisting dijalankan
// * Execution

// var nama = "Randi";
// console.log(nama);

// * creation phase => terjadi pada global context
// nama var = undefined
// nama function = fn()
// {hoisting} => dinaikkan ke atas
// window = global object
// this = window

// * execution phase

// console.log(sayHello());
// var nama = "Randi";
// var umur = 18;

// function sayHello() {
//     return `Halo nama saya ${nama}, saya ${umur} tahun`;
// }

// function membuat local execution context
// di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting
// scope

// var nama = "Randie";
// var username = "@RandieAzahli";

// function cetakURL() {
//     var instagramURL = "http://instagram.com/";
//     return instagramURL + username;
// }

// console.log(cetakURL("@dodysumpena"));

// function a() {
//     console.log("ini a");

//     function b() {
//         console.log("ini b");

//         function c() {
//             console.log("ini c");
//         }

//         c();
//     }

//     b();
// }

// a();

function satu() {
    var nama = "Randi";
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = "Sandi";
satu();
dua("Eja");
console.log(nama);

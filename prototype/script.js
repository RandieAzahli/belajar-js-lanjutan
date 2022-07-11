// ? membuat object dengan berbagai cara

// * object literal
// ! tidak efektif untuk object yang relatif banyak

// let mahasiswa1 = {
//   nama: "Randie",
//   energy: 10,
//   makan: function (porsi) {
//     this.energy += porsi;
//     console.log(`Halo datang ${this.nama} !, selamat makan...`);
//   },
// };

// let mahasiswa2 = {
//   nama: "Sandi",
//   energy: 10,
//   makan: function (porsi) {
//     this.energy += porsi;
//     console.log(`Halo datang ${this.nama} !, selamat makan...`);
//   },
// };

// * function declaration
// ! Duplikasi data

// function Mahasiswa(nama, energy) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energy = energy;
//   mahasiswa.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`Halo ${this.nama} ! selamat makan ...`);
//   };

//   mahasiswa.main = function (jam) {
//     this.energy -= jam;
//     console.log(`Halo ${this.nama} ! selamat bermain ...`);
//   };

//   return mahasiswa;
// }

// let Randi = Mahasiswa("Randi", 10);
// let Sandi = Mahasiswa("Sandi", 20);

// // * constructor function

// function Mahasiswa(nama, energy) {
//   this.nama = nama;
//   this.energy = energy;
//   this.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`Halo ${this.nama} ! selamat makan ...`);
//   };

//   this.main = function (jam) {
//     this.energy -= jam;
//     console.log(`Halo ${this.nama} ! selamat bermain ...`);
//   };
// }

// let randi = new Mahasiswa("Randi", 20);

// * object.create()

let methodeMahasiswa = {
    makan: function (porsi) {
        this.energy += porsi;
        console.log(`Hallo ${this.nama} ! selamat makan ...`);
    },

    main: function (jam) {
        this.energy -= jam;
        console.log(`Hallo ${this.nama} ! selamat bermain ...`);
    },

    tidur: function (jam) {
        this.energy += jam * 2;
        console.log(`Hallo ${this.nama} ! selamat tidur ...`);
    },
};

function Mahasiswa(nama, energy) {
    let mahasiswa = Object.create(methodeMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;
    return mahasiswa;
}

let randi = Mahasiswa("Randi", 20);

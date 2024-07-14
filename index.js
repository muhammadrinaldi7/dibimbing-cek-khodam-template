let wordCount = 0;
let countUserInputPassword = 1;

const user = {
  name: "",
  password: "12345",
  khodam: "",
};

alert("SELAMAT DATANG DI WEB KHODAM CEKK!!");

// Kamu bisa mengerjakan soal no 2 dibawah sini 
user.name = prompt("Masukkan nama kamu:");





// Kamu bisa mengerjakan soal no 1 dibawah sini 
let userInputPassword = prompt("Masukkan Password:");





// Kamu bisa mengerjakan soal no 3 dibawah sini 
let userInputBirthMonth = prompt("Masukkan hari apa kamu lahir!");





document.write(`<h2>SELAMAT DATANG ${user.name.toUpperCase()}!!</h2>`);
document.write(
  `<h3>Kamu telah mencoba memasukkan password sebanyak ${countUserInputPassword} kali</h3>`
);
document.write(`<h3>Jumlah kata pada nama kamu adalah ${wordCount}</h3>`);
document.write(`<h1>KHODAM KAMU ADALAH ${user.khodam.toUpperCase()}!!</h1>`);

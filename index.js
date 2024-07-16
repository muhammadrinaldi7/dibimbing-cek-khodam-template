let wordCount = 0;
let countUserInputPassword = 1;

const user = {
  name: "",
  password: "12345",
  khodam: "",
};

const hari_lahir = {
  "SENIN" : "Macan Kumbang",
  "SELASA" : "Colokan Listrik",
  "RABU" : "Duri Landak",
  "KAMIS" : "Naga Hitam",
  "JUMAT" : "Susanoo",
  "SABTU" : "Labi Labi",
  "MINGGU" : "Remot AC",
}

alert("SELAMAT DATANG DI WEB KHODAM CEKK!!");

// Kamu bisa mengerjakan soal no 2 dibawah sini 
user.name = prompt("Masukkan nama kamu:");
wordCount = user.name.split(" ").length;
console.log(wordCount);




// Kamu bisa mengerjakan soal no 1 dibawah sini 
let userInputPassword = prompt("Masukkan Password:");

while (userInputPassword !== user.password) {
  countUserInputPassword++;
  userInputPassword = prompt("Password Salah!Silahkan Masukkan Password:");
}




// Kamu bisa mengerjakan soal no 3 dibawah sini 
let userInputBirthMonth = prompt("Masukkan hari apa kamu lahir!").toUpperCase();
if (userInputBirthMonth in hari_lahir) {
  user.khodam = hari_lahir[userInputBirthMonth];
} else {
  user.khodam = "Khodam Tidak Ditemukan";
}




document.write(`<h2>SELAMAT DATANG ${user.name.toUpperCase()}!!</h2>`);
document.write(
  `<h3>Kamu telah mencoba memasukkan password sebanyak ${countUserInputPassword} kali</h3>`
);
document.write(`<h3>Jumlah kata pada nama kamu adalah ${wordCount}</h3>`);
document.write(`<h1>KHODAM KAMU ADALAH ${user.khodam.toUpperCase()}!!</h1>`);

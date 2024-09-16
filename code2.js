//Tugas 1

//1. Array.prototype.map()
//Deskripsi: Method ini digunakan untuk membuat array baru dengan hasil pemanggilan fungsi pada setiap elemen array yang ada.
//contoh ; 
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

//2. Array.prototype.filter()
//Deskripsi: Method ini digunakan untuk membuat array baru dengan semua elemen yang melewati kondisi yang diberikan dalam fungsi callback.
//Contoh ;
const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

//3. Array.prototype.reduce()
//Deskripsi: Method ini digunakan untuk mengeksekusi fungsi reducer pada setiap elemen array (dari kiri ke kanan) sehingga menjadi satu nilai tunggal.
//Contoh ; 
const numbers3 = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 10

//4. String.prototype.includes()
//Deskripsi: Method ini digunakan untuk menentukan apakah string berisi substring tertentu.
//Contoh ;
const sentence = 'The quick brown fox jumps over the lazy dog.';
const hasFox = sentence.includes('fox');
console.log(hasFox); // Output: true

//5. String.prototype.replace()
//Deskripsi; Method ini digunakan untuk mengganti bagian dari string dengan string lain, dan mengembalikan string baru.
//Contoh ;
let text = 'Hello World';
let newText = text.replace('World', 'JavaScript');
console.log(newText); // Output: 'Hello JavaScript'

//6.Math.random()
//Deskripsi ; Method ini mengembalikan angka desimal acak antara 0 (inklusif) dan 1 (eksklusif).
//Contoh ; 
const randomNum = Math.random();
console.log(randomNum); // Output: Angka acak antara 0 dan 1

//7. Math.floor()
//Deskripsi: Method ini digunakan untuk membulatkan angka ke bawah ke bilangan bulat terdekat.
//Contoh ;
const number = 4.7;
const flooredNumber = Math.floor(number);
console.log(flooredNumber); // Output: 4

//8. Date.now()
//Deskripsi: Method ini mengembalikan jumlah milidetik yang berlalu sejak 1 Januari 1970 00:00:00 UTC.
//Contoh ; 
const timestamp = Date.now();
console.log(timestamp); // Output: Milidetik sejak 1 Januari 1970

//9. Object.keys()
//Deskripsi: Method ini mengembalikan array dari properti enumerable yang dimiliki oleh objek yang diberikan.
//Contoh ; 
const person = { name: 'Alice', age: 25, city: 'Wonderland' };
const keys = Object.keys(person);
console.log(keys); // Output: ['name', 'age', 'city']

//10. Object.assign()
//Deskripsi: Method ini digunakan untuk menyalin nilai dari semua properti enumerable dari satu atau lebih objek sumber ke objek target. Ini mengembalikan objek target.
//Contoh ; 
const target = { a: 1 };
const source = { b: 2, c: 3 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget); // Output: { a: 1, b: 2, c: 3 }



//Tugas 2

const names = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];

function searchName(keyword, limit, callback) {
    // Filter nama yang mengandung keyword (tidak case-sensitive)
    const filteredNames = names.filter(name => name.toLowerCase().includes(keyword.toLowerCase()));
    
    // Batasi jumlah hasil sesuai limit
    const limitedNames = filteredNames.slice(0, limit);
    
    // Panggil callback function dengan hasil pencarian
    callback(limitedNames);
}

// Contoh callback function
function displayResult(result) {
    console.log(result);
}

// Contoh penggunaan
searchName("an", 3, displayResult);

//Tugas 3
function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    // Cek apakah nilaiAkhir lebih besar dari nilaiAwal
    if (nilaiAkhir <= nilaiAwal) {
        console.log("Nilai akhir harus lebih besar dari nilai awal");
        return;
    }

    // Cek apakah panjang dataArray lebih dari 5
    if (dataArray.length <= 5) {
        console.log("Jumlah angka dalam dataArray harus lebih dari 5");
        return;
    }

    // Filter dataArray untuk menemukan nilai di antara nilaiAwal dan nilaiAkhir
    const filteredArray = dataArray.filter((value) => value > nilaiAwal && value < nilaiAkhir);

    // Cek apakah ada nilai yang ditemukan
    if (filteredArray.length === 0) {
        console.log("Nilai tidak ditemukan");
        return;
    }

    // Urutkan hasil pencarian
    const sortedArray = filteredArray.sort((a, b) => a - b);

    // Tampilkan hasil ke layar/console
    console.log(sortedArray);
}

// Contoh penggunaan
seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]); 
// Output: [8, 14, 17]

seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]); 
// Output: "Nilai akhir harus lebih besar dari nilai awal"

seleksiNilai(4, 17, [2, 25, 4]); 
// Output: "Jumlah angka dalam dataArray harus lebih dari 5"

seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]); 
// Output: "Nilai tidak ditemukan"

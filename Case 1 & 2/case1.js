// Import library lodash untuk pengelompokkan data
const _ = require('lodash');

// Struktur data IFruit
const fruits = [
    {
        fruitId: 1,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 10
    },
    {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 3,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 50
    },
    {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100
    },
    {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10
    },
    {
        fruitId: 6,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 7,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
    }
];

// 1. Menampilkan daftar buah yang dimiliki Andi
function displayFruits() {
    const fruitNames = _.uniq(fruits.map(fruit => fruit.fruitName));
    console.log("Buah yang dimiliki Andi:", fruitNames.join(', '));
}

// 2. Menghitung jumlah wadah berdasarkan tipe buah dan buah apa saja di setiap wadah
function countContainers() {
    const containers = _.groupBy(fruits, 'fruitType');
    console.log("Jumlah wadah yang dibutuhkan:", Object.keys(containers).length);
    console.log("Buah di setiap wadah:");
    for (let type in containers) {
        const fruitNames = _.uniq(containers[type].map(fruit => fruit.fruitName));
        console.log(`${type}: ${fruitNames.join(', ')}`);
    }
}

// 3. Menghitung total stock buah di setiap wadah
function countTotalStock() {
    const containers = _.groupBy(fruits, 'fruitType');
    console.log("Total stock buah di setiap wadah:");
    for (let type in containers) {
        const totalStock = _.sumBy(containers[type], 'stock');
        console.log(`${type}: ${totalStock}`);
    }
}

// 4. Menampilkan komentar terkait kasus
function displayComment() {
    console.log("Komentar terkait kasus di atas: ...");
}

// Panggil fungsi-fungsi untuk menjawab pertanyaan-pertanyaan dalam kasus tersebut
displayFruits();
countContainers();
countTotalStock();
displayComment();

const _ = require('lodash');

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

function displayFruits() {
    const fruitNames = _.uniq(fruits.map(fruit => fruit.fruitName));
    console.log("Buah yang dimiliki Andi:", fruitNames.join(', '));
}

function countContainers() {
    const containers = _.groupBy(fruits, 'fruitType');
    console.log("Jumlah wadah yang dibutuhkan:", Object.keys(containers).length);
    console.log("Buah di setiap wadah:");
    for (let type in containers) {
        const fruitNames = _.uniq(containers[type].map(fruit => fruit.fruitName));
        console.log(`${type}: ${fruitNames.join(', ')}`);
    }
}

function countTotalStock() {
    const containers = _.groupBy(fruits, 'fruitType');
    console.log("Total stock buah di setiap wadah:");
    for (let type in containers) {
        const totalStock = _.sumBy(containers[type], 'stock');
        console.log(`${type}: ${totalStock}`);
    }
}

function displayComment() {
    console.log("Komentar terkait kasus di atas: Saya Pribadi tidak ada komentar,Tapi Apel nya ada 2, Apel dan apel dan sama sama IMPORT, saya harapp ini bukan kesalahan:)");
}

displayFruits();
countContainers();
countTotalStock();
displayComment();

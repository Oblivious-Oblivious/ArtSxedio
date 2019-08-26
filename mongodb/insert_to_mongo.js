const mongoose = require("mongoose");
const Image = require("./Image");

mongoose.Promise = global.Promise;
const db = "mongodb://localhost/images";

mongoose.connect(db, {
    useNewUrlParser: true,
    useFindAndModify: false
});

const imageList = [
    /* Tall */
    new Image({
        src: "./assets/img/tall/Boat in the Sunset.jpg",
        details: [
            "./assets/img/tall/details/Boat in the Sunset detail.jpg"
        ],
        title: "Boat in the Sunset",
        size: "tall",
        price: 80,
        dimensions: "60 x 100",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/tall/Dali.jpg",
        details: [
            "./assets/img/tall/details/Dali detail.jpg"
        ],
        size: "tall",
        title: "Dali",
        price: 100,
        dimensions: "60 x 80",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/tall/Lighthouse.jpg",
        details: [],
        size: "tall",
        title: "Lighthouse",
        price: 70,
        dimensions: "60 x 100",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/tall/Old House.jpg",
        details: [
            "./assets/img/tall/details/Old House detail.jpg"
        ],
        size: "tall",
        title: "Old House",
        price: 80,
        dimensions: "60 x 100",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/tall/Pencil.jpg",
        details: [
            "./assets/img/tall/details/Pencil detail.jpg"
        ],
        size: "tall",
        title: "Pencil",
        price: 80,
        dimensions: "60 x 100",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/tall/Poppies.jpg",
        details: [],
        size: "tall",
        title: "Poppies",
        price: 120,
        dimensions: "60 x 90",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/tall/River.jpg",
        details: [],
        size: "tall",
        title: "River",
        price: 100,
        dimensions: "60 x 100",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/tall/Rose.jpg",
        details: [
            "./assets/img/tall/details/Rose detail.jpg"
        ],
        size: "tall",
        title: "Rose",
        price: 100,
        dimensions: "60 x 100",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/tall/Salt Shaker.jpg",
        details: [
            "./assets/img/tall/details/Salt Shaker detail.jpg"
        ],
        size: "tall",
        title: "Salt Shaker",
        price: 100,
        dimensions: "60 x 100",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/tall/Sunny Snow.jpg",
        details: [],
        size: "tall",
        title: "Sunny Snow",
        price: 100,
        dimensions: "60 x 100",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/tall/Ver Meer.jpg",
        details: [],
        size: "tall",
        title: "Ver Meer",
        price: 100,
        dimensions: "60 x 100",
        type: "Acrilic"
    }),

    /* Wide */
    new Image({
        src: "./assets/img/wide/Figs.jpg",
        details: [
            "./assets/img/wide/details/Figs detail.jpg"
        ],
        size: "wide",
        title: "Figs",
        price: 100,
        dimensions: "90 x 60",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/wide/Fruit.jpg",
        details: [
            "./assets/img/wide/details/Fruit detail1.jpg",
            "./assets/img/wide/details/Fruit detail2.jpg"
        ],
        size: "wide",
        title: "Fruit",
        price: 100,
        dimensions: "90 x 60",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/wide/Leaves.jpg",
        details: [
            "./assets/img/wide/details/Leaves detail1.jpg",
            "./assets/img/wide/details/Leaves detail2.jpg",
            "./assets/img/wide/details/Leaves detail3.jpg"
        ],
        size: "wide",
        title: "Leaves",
        price: 100,
        dimensions: "90 x 60",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/wide/Night Waves.jpg",
        details: [],
        size: "wide",
        title: "Night Waves",
        price: 100,
        dimensions: "90 x 60",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/wide/Peaches.jpg",
        details: [],
        size: "wide",
        title: "Peaches",
        price: 100,
        dimensions: "90 x 60",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/wide/River Boat.jpg",
        details: [
            "./assets/img/wide/details/River Boat detail.jpg"
        ],
        size: "wide",
        title: "River Boat",
        price: 100,
        dimensions: "90 x 60",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/wide/Rocks.jpg",
        details: [],
        size: "wide",
        title: "Rocks",
        price: 100,
        dimensions: "90 x 60",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/wide/Snowy Village.jpg",
        details: [
            "./assets/img/wide/details/Snowy Village detail1.jpg",
            "./assets/img/wide/details/Snowy Village detail2.jpg"
        ],
        size: "wide",
        title: "Snowy Village",
        price: 100,
        dimensions: "90 x 60",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/wide/Vase.jpg",
        details: [],
        size: "wide",
        title: "Vase",
        price: 100,
        dimensions: "90 x 60",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/wide/Waves.jpg",
        details: [],
        size: "wide",
        title: "Waves",
        price: 100,
        dimensions: "90 x 60",
        type: "Acrilic"
    }),

    /* Ultra Wide */
    new Image({
        src: "./assets/img/ultra-wide/Cactus.jpg",
        details: [],
        size: "ultra-wide",
        title: "Cactus",
        price: 150,
        dimensions: "120 x 50",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/ultra-wide/Naxos.jpg",
        details: [],
        size: "ultra-wide",
        title: "Naxos",
        price: 150,
        dimensions: "120 x 50",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/ultra-wide/Pumkin.jpg",
        details: [
            "./assets/img/ultra-wide/details/Pumkin detail1.jpg",
            "./assets/img/ultra-wide/details/Pumkin detail2.jpg"
        ],
        size: "ultra-wide",
        title: "Pumkin",
        price: 150,
        dimensions: "120 x 50",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/ultra-wide/Quay.jpg",
        details: [
            "./assets/img/ultra-wide/details/Quay detail1.jpg",
            "./assets/img/ultra-wide/details/Quay detail2.jpg"
        ],
        size: "ultra-wide",
        title: "Quay",
        price: 150,
        dimensions: "120 x 50",
        type: "Acrilic"
    }),
    new Image({
        src: "./assets/img/ultra-wide/Quince.jpg",
        size: "ultra-wide",
        details: [],
        title: "Quince",
        price: 150,
        dimensions: "120 x 50",
        type: "Acrilic"
    }),
];

imageList.forEach((element) => {
    element.save((err, insertedImage) => {
        console.log(`Added ${insertedImage}`);
    });
});

var database = [];

var orange = {
    name: "orange",
    taste: "sweet",
    form: "round",
    colour: "orange",
    expired: false,
    size: 15,
    shop: {
        name: "biedronka",
        quantity: 100
    }
};

var apple = {
    name: "apple",
    taste: "sour",
    form: "round",
    colour: "green",
    expired: false,
    size: 10,
    shop: {
        name: "lidl",
        quantity: 400
    }
};

var banana = {
    name: "banana",
    taste: "sweet",
    form: "longitudinal",
    colour: "yellow",
    expired: true,
    size: 20,
    shop: {
        name: "tesco",
        quantity: 100
    }
};

// function CreateNewfruit(){
//     var fruit = {

//     }
//     addToDatabase()
// }

function addToDatabase(fruit){
    database.push(fruit);
}

function readAllDatabase(){
    database.forEach(function(fruit){
        console.log(fruit);
    })
}

function findByName(fruitName) {
    filterName = database.filter(function(fruit){
        return fruit.name === fruitName;
    })
    console.log(filterName);
}

function findByShopName(fruitShopName) {
    fruitShopName = database.filter(function(fruit){
        return fruit.shop.name === fruitShopName;
    })
    console.log(fruitShopName);
}

addToDatabase(orange);
addToDatabase(apple);
addToDatabase(banana);

// readAllDatabase();
// findByName('banana');
findByShopName('lidl')
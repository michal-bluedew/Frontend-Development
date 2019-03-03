var database = [];

var orange = {
    taste: "sweet",
    form: "round",
    colour: "orange",
    expired: false,
    size: 15,
    shop: {
        name: "Biedronka",
        quantity: 100
    }
};

var apple = {
    taste: "sour",
    form: "round",
    colour: "green",
    expired: false,
    size: 10,
    shop: {
        name: "Lidl",
        quantity: 400
    }
};

var banana = {
    taste: "sweet",
    form: "longitudinal",
    colour: "yellow",
    expired: true,
    size: 20,
    shop: {
        name: "Tesco",
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

function 

addToDatabase(orange);
addToDatabase(apple);
addToDatabase(banana);

readAllDatabase();
// console.log(database);
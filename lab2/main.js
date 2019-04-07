var database = {
    records: [],
    id: 0
};


var orange = {
    id: 1,
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
    id: 2,
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
    id: 3,
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


function addToDatabase(fruit){
    database.records.push(fruit);
}

function readAllDatabase(){
    database.records.forEach(function(fruit){
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

// console.log(readAllDatabase());
// console.log(updateFruit(1, {name: 'test'}));
// console.log(readAllDatabase());
// readAllDatabase();
// findByName('banana');
//findByShopName('lidl')


function prepareResponse(msg, data) {
    var response = {
        msg: msg,
        data: data
    };
    return JSON.stringify(response);
}

function addNewFruit(newFruit) {
    var alreadyFruit;
    if (!!database.records.length) {
        alreadyFruit = database.records
            .find(function(fruit) {
                return fruit.name === newFruit.name;
            });
    }
    if (!!alreadyFruit) {
        return response;
    }
    newFruit.id = ++database.id;
    database.records.push(newFruit);

    var response = prepareResponse('OK', null);
    return response;
}

function findFruitById(id) {
    var searchedFruit = database.records.find(function(fruit) {
        return fruit.id === id;
    });
    var msg = !!searchedFruit ? 'OK' : 'NOK!';
    var response = prepareResponse(msg, searchedFruit);
    return response;
}

function updateFruit(id, params) {
    var record = JSON.parse(findFruitById(id));
    if (record.msg !== 'OK') {
        var response = prepareResponse(record.msg, null);
        return response;
    }
    for (var param in params) {
        if(params.hasOwnProperty(param)) {
            if (param === 'id') {
                var response = prepareResponse('NOK!', null);
                return response;
            }
            record.data[param] = params[param];
        }
    };
    database.records = database.records
        .map(function(fruit) {
            if (fruit.id === record.data.id) {
                fruit = record.data;
            }
            return fruit;
        });
    var response = prepareResponse('OK', null);
    return response;
}

function deleteFruit(id) {
    var databaseBefore = database.records.length;
    database.records = database.records.filter(function(fruit) {
        return fruit.id !== id;
    });
    var msg = databaseBefore > database.records.length
        ? 'OK'
        : 'NOK!';
    var response = prepareResponse(msg, null);
    return response;
}

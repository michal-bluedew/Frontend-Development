function Fruit (name, swear, color) {
    if (this instanceof Fruit) {
        return console.log('Abstract');
    }

    this.id = null;
    this.name = name;
    this.swear = swear;
    this.color = color;
}

Fruit.prototype.setShop = function(name, quantity) {
    this.shop = [name, quantity];
}

function InstanceFruit(name, swear, color) {
    if (!(this instanceof InstanceFruit)) {
        return new InstanceFruit();
    }
    Fruit.call(this, name, swear, color);
}

InstanceFruit.prototype = Object.create(Fruit.prototype);
InstanceFruit.prototype.constructor = InstanceFruit;

var aplication = (function() {
    var database = {
        records: [],
        ID: 0
    };

    return {
        addNewFruit: function (newFruit) {
            var alreadyExistingFruit;
            if (!!database.records.length) {
                alreadyExistingFruit = database.records
                    .find(function(fruit) {
                        return fruit.name === newFruit.name;
                    });
            }
            if (!!alreadyExistingFruit) {
                var response = this.prepareResponse('Fruit already exist in database', null);
                return response;
            }
            newFruit.id = ++database.ID;
            database.records.push(newFruit);

            var response = this.prepareResponse('OK', null);
            return response;
        },
        getAllFruits: function () {
            var response = this.prepareResponse('OK', database.records);
            return response;
        },
        findFruitById: function (id) {
            var searchedFruit = database.records
                .find(function(fruit) {
                    return fruit.id === id;
                });
            var msg = !!searchedFruit ? 'OK' : 'NOK';
            var response = this.prepareResponse(msg, searchedFruit);
            return response;
        },
        prepareResponse: function (msg, data) {
            var response = {
                msg: msg,
                data: data
            };
            return JSON.stringify(response);
        }
    };
})();

//update, delete
// var fruit = new InstanceFruit('Banana', 'Sweet', 'Yellow');
//
// aplication.addNewFruit(fruit);
// console.log(JSON.parse(aplication.findFruitById(1)));
// console.log(aplication.getAllFruits());



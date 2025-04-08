const fruits = require("../fruits.json");

class Fruit {
    constructor(fruit) {
        this.genus = fruit.genus;
        this.name = fruit.name;
        this.id = fruit.id;
        this.family = fruit.family;
        this.order = fruit.order;
        this.nutrition = fruit.nutrition; 
    }

    static showAll() {
        return fruits.map(fruit => new Fruit(fruit));
    }

    static show(name) {
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() === name.toLowerCase());

        if (fruit) {
            return new Fruit(fruit);
        } else {
            throw "The fruit doesn't exist.";
        }
    }

    static create(data) {
        const newFruit = { ...data }; 
        newFruit.id = fruits.length + 1;

        fruits.push(newFruit);
        return new Fruit(newFruit);
    }

    update(data){
        const updateFruit = fruit.name.toLowerCase() == this.name.toLowerCase();
        if(updateFruit){
            updateFruit.name = data.name
            updateFruit.family = data.family

            return new Fruit(updateFruit)
        }else{
            throw 'Fruit is not found'
        }
    }

    destroy(){
        const deletedFruit = fruits.find(fruit => fruit.name.toLowerCase() == this.name.toLowerCase())

        if(deletedFruit){
            const index = fruits.indexOf(deletedFruit)
            fruits.slice(index,1)
        }else{
            
        }
    }
}

module.exports = Fruit;
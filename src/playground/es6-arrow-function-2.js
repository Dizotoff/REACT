const add = (a, b) => {
    //console.log(arguments);  - avaliable only with normal functions es5
    return a+b;
}

console.log(add(22,4, 101));


const user = {
    name: 'Dmytro',
    cities: ['Kyiv', 'Helsinki', 'Toronto'],
    printPlacesLived() {
       return this.cities.map((city)=>this.name + ' has lived in ' + city );
    }
};

console.log(user.printPlacesLived());

//Arrow function doesnt bound when initialized in (usage of THIS require es5 type of functions)

const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
}

console.log(multiplier.multiply());
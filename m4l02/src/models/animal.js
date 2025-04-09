'use strict'

import { uniqueId, randomNumber, seedGenerator } from '../services/seido-helpers.js';


function Animal() {
 
    this.id = uniqueId();
    this.name = "Ted";
    this.mood = "Tired";
    this.age = 5;
    this.kind = "Tiger";
}

Animal.prototype = {
    seed: function (_sgen)
    {
        const a = new Animal();
        a.id = uniqueId();
        a.name = _sgen.petName;
        a.mood = _sgen.fromString("Tired, Happy, Sleepy, Angry");
        a.age = randomNumber(0,10);
        a.kind = _sgen.fromString("Elephant, Lion, Tiger, Giraff, Zebra");
        
        return a;
    },

    seedMany: function (_sgen, nrOfItems) {
        const animals = [];
        
        for (let index = 0; index < nrOfItems; index++) {
            const p = new Animal().seed(_sgen);
            animals.push(p);        
          }
        return animals;
    }
}

const _sgen = new seedGenerator();

const a1 = new Animal().seed(_sgen);
console.log(a1);

const a2 = new Animal().seedMany(_sgen, 10);
console.log(a2);



 
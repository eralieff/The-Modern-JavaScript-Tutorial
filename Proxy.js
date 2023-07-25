'use strict';

// Object proxy
const person = {
    name: 'Berik',
    age: 21,
    job: 'Front-end developer'
}

const op = new Proxy(person, {
    get(target, p) {
        console.log(`Target: ${target}`);
        console.log(`Property: ${p}`);
        if (!(p in target)) {
            return p
                    .split('_')
                    .map(p => target[p])
                    .join(' ');
        }

        return target[p];
    },

    set(target, p, newValue) {
        console.log(`New value: ${newValue}`);
        
        if (p in target) {
            target[p] = newValue;
            return true;
        } else {
            throw new Error(`The "${p}" property doesn't exist in the "${target}" object.`);
        }
    },

    has(target, p) {
        return ['name', 'age', 'job'].includes(p);
    },

    deleteProperty(target, p) {
        delete target[p];
        console.log('Deletion successfully completed!');
        return true;
    }
});

console.log(op.age);
console.log(op.age_job_name);
op.age = 26;
console.log(op.age);
person.noprop = 213;
console.log('randomNameProp' in op);
console.log('name' in op);
delete op.age;

// Function proxy
const log = text => `Log: ${text}`;

const fp = new Proxy(log, {
    apply(target, thisArg, argArray) {
        console.log('Calling function...');

        return target.call(thisArg, argArray);
    }
});

console.log(fp('Some text'));

// Class proxy
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const pp = new Proxy(Person, {
    construct(target, argArray) {
        console.log('Construct...');

        return new target(...argArray);
    }
})

const p = new pp('Arman', 21);
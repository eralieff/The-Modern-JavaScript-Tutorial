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

// Wrapper

const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, p) => p in obj ? obj[p] : defaultValue
    });
}

const position = withDefaultValue(
    {
        x: 24,
        y: 42
    },
    0
);

console.log(position);
console.log(position.x);
console.log(position.y);
console.log(position.asdf);

// Hidden properties
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, p) => (p in obj) && (!p.startsWith(prefix)),
        ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
        get: (obj, p, receiver) => p in receiver ? obj[p] : undefined
    });
}

const data = withHiddenProps({
    name: 'Berik',
    age: 21,
    _uid: '234124503129'
})

console.log(data);
console.log(data.age);
console.log(data.name);
console.log(data._uid);
console.log('_uid' in data);
for (let key in data) console.log(key);
console.log(Object.keys(data));

// Optimization

const userData = [
    {id: 1, name: 'Berik', job: 'Front-end developer', age: 21},
    {id: 2, name: 'Aizhan', job: 'UX/UI designer', age: 21},
    {id: 3, name: 'Yelana', job: 'Student', age: 18},
    {id: 4, name: 'Bakdaulet', job: 'Back-end developer', age: 21}
];

console.log(userData.find(user => user['id'] === 3 ? user['id'] : undefined));

const index = {};
userData.forEach(obj => index[obj.id] = obj);
console.log(index[3]);

const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {
        console.log(target);
        console.log(args);

        const index = {};
        args.forEach(item => index[item.id] = item);

        return new Proxy(new target(...args), {
            get(arr, p) {
                switch (p) {
                    case 'push':
                        return item => {
                            index[item.id] = item;
                            arr['push'].call(arr, item);
                        }
                    case 'findById':
                        return id => index[id];
                    default:
                        return arr[p];
                }
            }
        });
    }
})

const users = new IndexedArray(userData);
console.log(users);

console.log(users[0]);
console.log(users[1]);

users.push({id: 412, name:'Syrym'});

console.log(users[4]);
console.log(users.findById(412));
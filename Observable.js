'use strict';

function makeObservable(target) {
    const handlers = new Set();

    const observable = new Proxy(target, {
        set(target, prop, value) {
            const success = Reflect.set(target, prop, value);

            if (success) {
                handlers.forEach(handler => handler(prop, value));
            }
            
            return success;
        }
    });
    
    observable.observe = function(handler) {
        handlers.add(handler);
    };
    
    return observable;
}

// Пример использования:  
let user = {};
user = makeObservable(user);

user.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
});

user.name = "John"; // выводит: SET name=John
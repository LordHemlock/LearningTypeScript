'use strict';
interface Lengthwise {
    length: number;
}

function newLoggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// newLoggingIdentity(3); this still won't work because it doesn't have the correct property
// however we can make an object {} that does have the correct property to let it through.
// or maybe not, need to look into this further.  The below statement still throws an error
// loggingIdentity({"length": 10, "value": 3});


// Using Type Parameters in Generic Constraints
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
// getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.



// Using Class Types in Generics
function create<T>(c: {new(): T; }): T {
    return new c();
}


class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

// @ts-ignore
class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new() => A): A {
    return new c();
}

// createInstance(Lion).keeper.nametag;
// createInstance(Bee).keeper.hasMask;

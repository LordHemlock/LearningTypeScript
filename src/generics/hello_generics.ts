'use strict';
interface GenericIdentityFn<T> {
    <T>(arg: T): T;
}


function identity<T>(arg: T): T {
    console.log(arg);
    return arg;
}

let output = identity<string>("myString");
let otherOutput = identity("myOtherString");
let numberOutput = identity<number>(4);

// function loggingIdentity<T>(arg: Array<T>): Array<T>{} would be the same as:
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

// let myIdentity: GenericIdentityFn = identity;
let myIdentity: GenericIdentityFn<number> = identity;
let objectLiteralIdentity: {<T>(arg: T): T} = identity;
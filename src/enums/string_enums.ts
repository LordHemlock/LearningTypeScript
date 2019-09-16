'use strict';

enum StringDirection {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

// E.X is constant:
enum E { X }

// All enum members in 'E1' and 'E2' are constant.
enum E1 { X, Y, Z }

enum E2 {
    A = 1, B, C
}


enum FileAccess {
    // constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = "123".length
}


enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

// Will cause an error because a Circle can't have the kind Square
// let c: Circle = {
//     kind: ShapeKind.Square,
//     radius: 100,
// }


enum E5 {
    Foo,
    Bar,
}

/*
// Error! This condition will always return 'true' since the types 'E5.Foo' and 'E5.Bar' have no overlap.

function f(x: E5) {
    if (x !== E5.Foo || x !== E5.Bar) {

    }
}
*/

// enums can be passed around like any other object

function f(obj: { Foo: number }) {
    return obj.Foo;
}

console.log(f(E5));
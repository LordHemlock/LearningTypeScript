interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
/*
all of the things in these comments will cause an error
p1.x = 5; // error!
*/

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
/*
all of the things in these comments will cause an error
ro[0] = 12;
ro.push(5);
ro.length = 100;
a = ro;
*/

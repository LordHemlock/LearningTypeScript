interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

class Animals {
    name: string;
}

class Dogs extends Animals {
    breed: string;
}

/* Error: indexing with a numeric string might get you a completely separate type of animal

interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}
 */

interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number;
    name: string;
}
'use strict';

interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function(this: Deck) {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);


/*
From the TypeScript Documentation Handbook
https://www.typescriptlang.org/docs/handbook/functions.html
Even better, TypeScript will warn you when you make this mistake if you pass the --noImplicitThis flag to the compiler. It will point out that this in this.suits[pickedSuit] is of type any.

this parameters #
Unfortunately, the type of this.suits[pickedSuit] is still any. That’s because this comes from the function expression inside the object literal. To fix this, you can provide an explicit this parameter. this parameters are fake parameters that come first in the parameter list of a function:

function f(this: void) {
    // make sure `this` is unusable in this standalone function
}
 */
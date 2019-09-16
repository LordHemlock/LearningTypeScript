'use strict';

enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

enum Responses {
    No,
    Yes,
}

function respond(recipient: string, message: Responses): void {
    console.log()
}

respond("Princess Caroline", Responses.Yes);


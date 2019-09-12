interface ClockConstructor {
    new(hour: number, minute: number): ClockInter;
}

interface ClockInter {
    tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInter {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInter {
    constructor(h: number, m: number) {
    }

    tick() {
        console.log("beep beep");
    }
}

class AnalogClock implements ClockInter {
    constructor(h: number, m: number) {
    }

    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

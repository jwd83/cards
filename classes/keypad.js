/*

This class is responsible for combining keyboard and gamepad input into a
single unified input system.

It has a pressed and held state for each key/button, and it can be used to
check if a key/button has just been pressed or is being held.

*/

function empty_keypad() {
    return {
        up: false,
        down: false,
        left: false,
        right: false,
        A: false,
        B: false,
        X: false,
        Y: false,
        L1: false,
        R1: false,
        L2: false,
        R2: false,
        x0: 0.0,
        y0: 0.0,
        x1: 0.0,
        y1: 0.0,

    }
}
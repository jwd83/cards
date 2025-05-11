/*

This class is responsible for combining keyboard and gamepad input into a
single unified input system.

It has a pressed and held state for each key/button, and it can be used to
check if a key/button has just been pressed or is being held.


Methods to query:

held (key is being held down)
pressed (key was just pressed this sample)
released (key was just released this sample)
duration (how long the key has been held down)


*/

keyboard_map = {
    'up': 'W',
    'down': 'S',
    'left': 'A',
    'right': 'D',
    'A': 'K',
    'B': 'L',
    'X': 'J',
    'Y': 'I',
    'L1': 'Q',
    'R1': 'O',
    'L2': 'Y',
    'R2': 'P',
}

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

class Keypad {
    constructor(game) {
        this._game = game;
        this.p = empty_keypad();
        this.r = empty_keypad();
        this.h = empty_keypad();
        this.d = empty_keypad();
    }



}

export default Keypad;
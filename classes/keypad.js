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

const keyboard_map = {
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
    #scene;
    #last_held;
    #control_map;
    constructor(scene, control_scheme = {}) {
        this.#scene = scene;
        this.input = scene.input;
        this.control_scheme = control_scheme;
        this.#last_held = empty_keypad();
        this.h = empty_keypad();
        this.p = empty_keypad();
        this.r = empty_keypad();
        this.d = empty_keypad();
        this.#scene.game.events.on("step", () => {
            this.update();
        });
    }

    update() {
        /*

        clear the held state and rebuild it from scratch each update.

        once created we can use it to check the pressed and released state
        of each key.

        on a press record the time pressed for the duration reading

        */

        this.h = empty_keypad();

        // update held based on gamepad

        this.#update_held_from_gamepad();

        // update held based on keyboard input
        this.#update_held_from_keyboard();

        // overwrite #last_held with h
        this.#last_held = this.h;
    }

    #update_held_from_keyboard() {


    }

    #update_held_from_gamepad() {
        // exit if no gamepad is connected
        if (this.input.gamepad.total === 0) return;

        console.log("gamepad connected");

        // connect to the gamepad
        const pad = this.input.gamepad.getPad(0);

        this.h.up = pad.up;
        this.h.down = pad.down;
        this.h.left = pad.left;
        this.h.right = pad.right;
        this.h.A = pad.A;
        this.h.B = pad.B;
        this.h.X = pad.X;
        this.h.Y = pad.Y;
        this.h.L1 = pad.L1;
        this.h.R1 = pad.R1;
        this.h.L2 = pad.L2;
        this.h.R2 = pad.R2;
        this.h.x0 = pad.axes[0].getValue();
        this.h.y0 = pad.axes[1].getValue();
        this.h.x1 = pad.axes[2].getValue();
        this.h.y1 = pad.axes[3].getValue();
    }
}

export default Keypad;
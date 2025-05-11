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
        L2: 0.0,
        R2: 0.0,
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
    #key_map;
    constructor(scene, control_scheme = {}) {
        this.#scene = scene;
        this.input = scene.input;
        this.control_scheme = control_scheme;
        this.#key_map = {
            up: this.input.keyboard.addKey(keyboard_map.up),
            down: this.input.keyboard.addKey(keyboard_map.down),
            left: this.input.keyboard.addKey(keyboard_map.left),
            right: this.input.keyboard.addKey(keyboard_map.right),
            A: this.input.keyboard.addKey(keyboard_map.A),
            B: this.input.keyboard.addKey(keyboard_map.B),
            X: this.input.keyboard.addKey(keyboard_map.X),
            Y: this.input.keyboard.addKey(keyboard_map.Y),
            L1: this.input.keyboard.addKey(keyboard_map.L1),
            R1: this.input.keyboard.addKey(keyboard_map.R1),
            L2: this.input.keyboard.addKey(keyboard_map.L2),
            R2: this.input.keyboard.addKey(keyboard_map.R2),
        }
        this.#last_held = empty_keypad();
        this.h = empty_keypad(); // held state
        this.p = empty_keypad(); // pressed state
        this.r = empty_keypad(); // released state
        this.d = empty_keypad(); // duration state
        for (const key in this.d) {
            this.d[key] = 0;
        }

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

        // update pressed and released state using the held state and the last held state
        for (const key in this.h) {
            // if the key is held and was not held last frame, it was pressed
            if (this.h[key] && !this.#last_held[key]) {
                this.p[key] = true;
                this.d[key] = 0;
            } else {
                this.p[key] = false;
            }

            // if the key is not held and was held last frame, it was released
            if (!this.h[key] && this.#last_held[key]) {
                this.r[key] = true;
            } else {
                this.r[key] = false;
            }

            // if the key is held, increment the duration
            if (this.h[key]) {
                this.d[key]++;
            }
        }

        // overwrite #last_held with h
        this.#last_held = this.h;
    }

    #update_held_from_keyboard() {
        this.h.up = this.#key_map.up.isDown;
        this.h.down = this.#key_map.down.isDown;
        this.h.left = this.#key_map.left.isDown;
        this.h.right = this.#key_map.right.isDown;
        this.h.A = this.#key_map.A.isDown;
        this.h.B = this.#key_map.B.isDown;
        this.h.X = this.#key_map.X.isDown;
        this.h.Y = this.#key_map.Y.isDown;
        this.h.L1 = this.#key_map.L1.isDown;
        this.h.R1 = this.#key_map.R1.isDown;
        this.h.L2 = this.#key_map.L2.isDown ? 1.0 : 0.0;
        this.h.R2 = this.#key_map.R2.isDown ? 1.0 : 0.0;

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
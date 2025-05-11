import Title from "./scenes/Title.js";
import MainMenu from "./scenes/MainMenu.js";
import Draft from "./scenes/Draft.js";
import GamepadTester from "./scenes/GamepadTester.js";
import Keypad from "./classes/keypad.js";

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    loader: {
        baseURL: "assets/",
    },
    input: {
        gamepad: true,
    },
    scale: {
        mode: Phaser.Scale.FIT,
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: false,
        },
    },
    scene: [Title, GamepadTester, MainMenu, Draft],
};

const game = new Phaser.Game(config);
game.k = new Keypad(game);
game._frame_count = 0;

game.events.on("ready", () => {
    console.log("event:game:ready");
});

game.events.on("step", () => {
    game._frame_count++;
    game.k.update();
    if (game.k.h.up) {
        console.log("up help");
    }

});


game.pad = null;
import Title from "./scene/title.js";
import MainMenu from "./scene/mainmenu.js";
import Draft from "./scene/draft.js";
import GamepadTester from "./scene/gamepadtester.js";

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
game._frame_count = 0;

game.events.on("ready", () => {
    console.log("event:game:ready");
});

game.events.on("step", () => {
    game._frame_count++;
});

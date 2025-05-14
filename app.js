import Title from "./scenes/title.js";
import MainMenu from "./scenes/mainmenu.js";
import Draft from "./scenes/draft.js";
import GamepadTester from "./scenes/gamepadtester.js";
import Memory from "./scenes/memory.js";
import CardInfo from "./scenes/cardinfo.js";

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
    scene: [Title, GamepadTester, MainMenu, Draft, Memory, CardInfo],
};

const game = new Phaser.Game(config);
game._frame_count = 0;

game.events.on("ready", () => {
    console.log("event:game:ready");
});

game.events.on("step", () => {
    game._frame_count++;
});

import Title from "./scenes/Title.js";
import MainMenu from "./scenes/MainMenu.js";
import Draft from "./scenes/Draft.js";
import GamepadTester from "./scenes/GamepadTester.js";

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
game.events.on("ready", () => {
    console.log("Game is ready!");
}
);
game.pad = null;
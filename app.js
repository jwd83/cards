import Title from "./scenes/title.js";
import MainMenu from "./scenes/mainmenu.js";
import Draft from "./scenes/draft.js";
import GamepadTester from "./scenes/gamepadtester.js";
import Memory from "./scenes/memory.js";
import CardInfo from "./scenes/cardinfo.js";
import * as C from "./constants.js";

//------------------------------------------------------
// Beginning of custom font hack

class CustomText extends Phaser.GameObjects.Text {
    constructor(scene, x, y, text, style) {
        if (!style) style = {};
        if (!style.fontFamily) style.fontFamily = "Rock Salt";


        super(scene, x, y, text, style);
    }
}

Phaser.GameObjects.Text = CustomText;
Phaser.GameObjects.GameObjectFactory.remove('text');
Phaser.GameObjects.GameObjectFactory.register('text', function (x, y, text, style) {
    return this.displayList.add(new Phaser.GameObjects.Text(this.scene, x, y, text, style));
});

// End of custom font hack
//------------------------------------------------------
// Begin of create surface hack

Phaser.Scene.prototype.createSurface = function (width, height) {
    let rt = this.make.renderTexture({ width, height, add: false });
    return rt;
};

// End of create surface hack
//------------------------------------------------------

const config = {
    type: Phaser.AUTO,
    width: C.RESOLUTION.WIDTH,
    height: C.RESOLUTION.HEIGHT,
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
    scene: [Title, CardInfo, GamepadTester, MainMenu, Draft, Memory],
};

const game = new Phaser.Game(config);

console.log(`Width x Height: ${C.RESOLUTION.WIDTH} x ${C.RESOLUTION.HEIGHT}`);

game._frame_count = 0;

game.events.on("ready", () => {
    console.log("event:game:ready");
});

game.events.on("step", () => {
    game._frame_count++;
});

import * as C from "../constants.js";

class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        this.add.text(C.RESOLUTION.WIDTH / 2, C.RESOLUTION.HEIGHT / 2, 'Choose Game Mode', {
            fontSize: '64px',
            fill: '#fff'
        }).setOrigin(0.5);

    }
}

export default MainMenu;

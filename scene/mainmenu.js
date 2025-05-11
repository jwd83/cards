class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        this.add.text(1920 / 2, 1080 / 2, 'Choose Game Mode', {
            fontSize: '64px',
            fill: '#fff'
        }).setOrigin(0.5);

    }
}

export default MainMenu;

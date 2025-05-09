class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        this.add.text(1280 / 2, 720 / 2, 'Choose Game Mode', {
            fontSize: '64px',
            fill: '#fff'
        }).setOrigin(0.5);

        // Add game mode options here
    }
}

export default MainMenu;

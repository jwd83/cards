class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        this.add.text(400, 200, 'Choose Game Mode', {
            fontSize: '32px',
            fill: '#fff'
        }).setOrigin(0.5);

        // Add game mode options here
    }
}

export default MainMenu;

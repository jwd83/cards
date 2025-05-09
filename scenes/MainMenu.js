class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        this.add.text(0, 0, 'Choose Game Mode', {
            fontSize: '32px',
            fill: '#fff'
        });

        // Add game mode options here
    }
}

export default MainMenu;

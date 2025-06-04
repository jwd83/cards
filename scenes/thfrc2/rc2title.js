/*

The Hunt for Roy Carnassus II

Title Screen
Game Mode Screen
->EZ mode
->Hard mode
->Settings
Game Screen
Defeat Screen
Victory Screen






*/

export default class RC2Title extends Phaser.Scene {
    constructor() {
        super('RC2Title');
    }

    preload() {
        // Load any assets if needed
    }

    create() {
        const { width, height } = this.scale;
        this.match_text = this.add.text(width / 2, height / 2, 'The Hunt for Roy Carnassus II', {
            fontSize: '32px',
            color: '#fff',
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {
            this.scene.start('RC2Title');
        });
    }
}
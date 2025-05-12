/*

states:
    0 = dealing
    1 = player first pick
    2 = show first pick
    3 = player second pick
    4 = show second pick
    5 = 
*/


export default class MatchGame extends Phaser.Scene {
    constructor() {
        super('MatchGame');
    }

    preload() {
        // Load any assets if needed
    }

    create() {
        const { width, height } = this.scale;
        this.add.text(width / 2, height / 2, 'Matching Game', {
            fontSize: '32px',
            color: '#fff',
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {
            this.scene.start('MatchGame');
        });
    }
}
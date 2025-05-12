export default class MatchTitle extends Phaser.Scene {
    constructor() {
        super('MatchTitle');
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
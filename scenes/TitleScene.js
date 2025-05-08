class TitleScene extends Phaser.Scene {
    constructor() {
        super('TitleScene');
    }

    preload() {
        this.load.image('title', 'images/title.png');
        this.load.image('button', 'images/button-small.png');
    }

    create() {

        const titleImage = this.add.image(0, 0, 'title');
        titleImage.setOrigin(0, 0);
        titleImage.setScale(0.75);

        this.add.text(400, 200, 'The Land of Monsters', {
            fontSize: '32px',
            fill: '#fff'
        }).setOrigin(0.5);

        const startButton = this.add.image(400, 350, 'button').setInteractive();
        startButton.setScale(1);

        this.add.text(400, 350, 'Start Game', {
            fontSize: '20px',
            fill: '#000'
        }).setOrigin(0.5);

        startButton.on('pointerdown', () => {
            this.scene.start('GameModeScene');
        });

        startButton.on('pointerover', () => {
            startButton.setTint(0xcccccc);
        });

        startButton.on('pointerout', () => {
            startButton.clearTint();
        });
    }
}

export default TitleScene;

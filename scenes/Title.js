class Title extends Phaser.Scene {
    constructor() {
        super('Title');
    }

    preload() {
        this.load.image('title', 'images/title.png');
        this.load.image('button', 'images/button-small.png');
    }

    update() {

        this.titleTick += 0.05;
        this.titleText.setScale(1 + Math.sin(this.titleTick) / 20);

    }

    create() {

        const titleImage = this.add.image(0, 0, 'title');
        titleImage.setOrigin(0, 0);
        titleImage.setScale(0.75);

        this.titleTick = 0;
        this.titleText = this.add.text(1280 / 2, 720 / 6, 'The Land of Monsters', {
            fontSize: '64px',
            fill: '#fffa',
            stroke: '#000',
            strokeThickness: 6,

        }).setOrigin(0.5);

        const startButton = this.add.image(400, 350, 'button').setInteractive();
        startButton.setScale(1);

        this.add.text(400, 350, 'Start Game', {
            fontSize: '20px',
            fill: '#000',
            stroke: '#fff',
            strokeThickness: 6,
        }).setOrigin(0.5);

        startButton.on('pointerdown', () => {
            this.scene.start('MainMenu');
        });

        startButton.on('pointerover', () => {
            startButton.setTint(0xcccccc);
        });

        startButton.on('pointerout', () => {
            startButton.clearTint();
        });
    }
}

export default Title;

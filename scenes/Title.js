import Keypad from "../classes/keypad.js";

class Title extends Phaser.Scene {
    constructor() {
        super('Title');
    }

    preload() {
        this.load.image('title', 'images/title.png');
        this.load.image('button', 'images/button-small.png');
        this.load.audio('shuffle', 'audio/cards-shuffling-87543.mp3'); // free sound community
    }

    update() {

        this.titleTick += 0.05;
        this.titleText.setScale(1 + Math.sin(this.titleTick) / 20);

        if (this.k.p.up) console.log('pressed:up');
        if (this.k.p.down) console.log('pressed:down');
        if (this.k.p.left) console.log('pressed:left');
        if (this.k.p.right) console.log('pressed:right');

        if (this.k.r.up) console.log('released:up');
        if (this.k.r.down) console.log('released:down');
        if (this.k.r.left) console.log('released:left');
        if (this.k.r.right) console.log('released:right');

        

    }

    create() {

        this.k = new Keypad(this);

        const titleImage = this.add.image(0, 0, 'title');
        titleImage.setOrigin(0, 0);
        titleImage.setScale(1.1);

        this.titleTick = 0;
        this.titleText = this.add.text(1920 / 2, 1080 / 6, 'Card Game', {

            font: '900 96px Arial',
            fill: '#fff',
            stroke: '#000',
            strokeThickness: 12,

        }).setOrigin(0.5);

        const btnToggleFullscreen = this.add.image(1920 - 100, 50, 'button').setInteractive();
        btnToggleFullscreen.setScale(0.85);
        this.add.text(1920 - 100, 50, 'Fullscreen', {
            fontSize: '20px',
            fill: '#000',

        }).setOrigin(0.5);
        btnToggleFullscreen.on('pointerdown', () => {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            } else {
                this.scale.startFullscreen();
            }
        });

        const startButton = this.add.image(400, 350, 'button').setInteractive();
        startButton.setScale(1);

        this.add.text(400, 350, 'Start Game', {
            fontSize: '20px',
            fill: '#000',
            stroke: '#fff',
            strokeThickness: 6,
        }).setOrigin(0.5);

        startButton.on('pointerdown', () => {

            let sfx = this.sound.add('shuffle');
            sfx.play();
            this.scene.start('GamepadTester');
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

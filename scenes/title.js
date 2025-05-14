import Keypad from "../classes/keypad.js";

class Title extends Phaser.Scene {
    constructor() {
        super('Title');
    }

    create() {

        this.k = new Keypad(this);

        const titleImage = this.add.image(0, 0, 'title');
        titleImage.setOrigin(0, 0);
        titleImage.setScale(1.1);

        this.titleTick = 0;
        this.titleText = this.add.text(1920 / 2, 1080 / 6, 'Main Menu', {

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

        const btnMemory = this.add.image(400, 150, 'button').setInteractive();
        btnMemory.setScale(1);
        this.add.text(400, 150, 'Memory Game', {
            fontSize: '20px',
            fill: '#000',
            stroke: '#fff',
            strokeThickness: 6,
        }).setOrigin(0.5);
        btnMemory.on('pointerdown', () => {
            this.scene.start('Memory');
        });
        btnMemory.on('pointerover', () => {
            btnMemory.setTint(0xcccccc);
        }
        );
        btnMemory.on('pointerout', () => {
            btnMemory.clearTint();
        });

        const btnShuffleSfx = this.add.image(400, 250, 'button').setInteractive();
        btnShuffleSfx.setScale(1);
        this.add.text(400, 250, 'Shuffle SFX', {
            fontSize: '20px',
            fill: '#000',
            stroke: '#fff',
            strokeThickness: 6,
        }).setOrigin(0.5);

        btnShuffleSfx.on('pointerdown', () => {
            let sfx = this.sound.add('shuffle');
            sfx.play();
        });
        btnShuffleSfx.on('pointerover', () => {
            btnShuffleSfx.setTint(0xcccccc);
        });

        btnShuffleSfx.on('pointerout', () => {
            btnShuffleSfx.clearTint();
        });



        const btnGamepadTester = this.add.image(400, 350, 'button').setInteractive();
        btnGamepadTester.setScale(1);

        this.add.text(400, 350, 'Gamepad Test', {
            fontSize: '20px',
            fill: '#000',
            stroke: '#fff',
            strokeThickness: 6,
        }).setOrigin(0.5);

        btnGamepadTester.on('pointerdown', () => {

            // let sfx = this.sound.add('shuffle');
            // sfx.play();
            this.scene.start('GamepadTester');
        });

        btnGamepadTester.on('pointerover', () => {
            btnGamepadTester.setTint(0xcccccc);
        });

        btnGamepadTester.on('pointerout', () => {
            btnGamepadTester.clearTint();
        });

        const btnCardInfo = this.add.image(400, 450, 'button').setInteractive();
        btnCardInfo.setScale(1);
        this.add.text(400, 450, 'Card Info', {
            fontSize: '20px',
            fill: '#000',
            stroke: '#fff',
            strokeThickness: 6,
        }).setOrigin(0.5);
        btnCardInfo.on('pointerdown', () => {
            this.scene.start('CardInfo');
        });
        btnCardInfo.on('pointerover', () => {
            btnCardInfo.setTint(0xcccccc);
        });
        btnCardInfo.on('pointerout', () => {
            btnCardInfo.clearTint();
        });
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
}

export default Title;

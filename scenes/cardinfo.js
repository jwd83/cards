
class CardInfo extends Phaser.Scene {
    #card;
    constructor() {
        super('CardInfo');
    }

    preload() {

        this.load.image('blank', 'images/kayla-blank.png');
    }

    create() {
        this.#card = this.add.image(0, 0, 'blank');
        this.#card.setOrigin(0, 0);
        this.#card.setScale(0.5);


    }

    update() {

    }
}

export default CardInfo;



class CardInfo extends Phaser.Scene {
    #card;
    #fireball;
    constructor() {
        super('CardInfo');
    }

    preload() {

        this.load.image('blank', 'images/kayla-blank.png');
    }

    create() {

        // blank height and width
        const bh = this.textures.get('blank').getSourceImage().height;
        const bw = this.textures.get('blank').getSourceImage().width;

        // console.log(bh, bw);
        this.#fireball = this.add.renderTexture(0, 0, bw, bh);
        this.#fireball.setOrigin(0, 0);


        // Draw the blank background
        this.#fireball.draw('blank', 0, 0);



        // Draw the card name
        const card_name = this.add.text(0, 0, 'Fireball', {
            fontSize: '80px',
            color: '#f44',
            stroke: '#222',
            strokeThickness: 6,
        });
        card_name.setX((bw - card_name.width) / 2);
        card_name.setY((bh - card_name.height) / 2);
        this.#fireball.draw(card_name, card_name.x, card_name.y);
        card_name.destroy();

        // Draw the card cost
        const card_cost = this.add.text(0, 0, '3', {
            fontSize: '100px',
            color: '#f44',
            stroke: '#222',
            strokeThickness: 8,
        });
        card_cost.setX((bw - card_cost.width) / 10);
        card_cost.setY((bh - card_cost.height) / 20);
        this.#fireball.draw(card_cost, card_cost.x, card_cost.y);
        card_cost.destroy();




        this.#fireball.setScale(0.45);


        // this.#card = this.add.image(0, 0, this.#fireball.texture.key);
        // this.#card.setOrigin(0, 0);
        // this.#card.setScale(0.5);

    }

    update() {
        // this.#fireball.setX(Math.sin(this.game._frame_count / 100) * 50 + 50);
        // this.#fireball.setY(Math.cos(this.game._frame_count / 100) * 50 + 50);

    }
}

export default CardInfo;

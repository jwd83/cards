
class CardInfo extends Phaser.Scene {
    #card;
    #fireball;
    constructor() {
        super('CardInfo');
    }

    preload() {

        this.load.image('blank', 'images/kayla-blank.png');
        this.load.image('fireball', 'images/fireball.jpg');
    }

    create() {

        // blank height and width
        const bh = this.textures.get('blank').getSourceImage().height;
        const bw = this.textures.get('blank').getSourceImage().width;

        // console.log(bh, bw);
        this.#fireball = this.add.renderTexture(0, 0, bw, bh);
        this.#fireball.setOrigin(0, 0);


        /*


        card window:

        top left is 160, 160
        bottom right is 1500, 1060

        width is 1340
        height is 900

        stretch fireball.jpg to be at least 900 tall and 1340 wide while keeping the aspect ratio


        detect the aspect ratio of fireball.jpg and it's width and height


        */

        // Get the fireball texture dimensions
        const fireball_width = this.textures.get('fireball').getSourceImage().width;
        const fireball_height = this.textures.get('fireball').getSourceImage().height;

        // Calculate the aspect ratio
        const fireball_aspect_ratio = fireball_width / fireball_height;

        // Calculate the new width and height based on the aspect ratio
        let new_width = 1340;
        let new_height = 900;
        if (fireball_aspect_ratio > 1) {
            // Fireball is wider than it is tall
            new_height = 900;
            new_width = fireball_width * (new_height / fireball_height);
        } else {
            // Fireball is taller than it is wide
            new_width = 1340;
            new_height = fireball_height * (new_width / fireball_width);
        }

        // make a copy of the fireball image set to the new width and height
        const fireball_copy = this.add.image(0, 0, 'fireball');
        fireball_copy.setOrigin(0, 0);
        fireball_copy.setScale(new_width / fireball_width, new_height / fireball_height);

        // crop the edges to make it exactly 1340 x 900
        fireball_copy.setCrop(0, 0, 1340, 900);
        // calculate to crop the center 1340 x 900
        // const crop_x = (fireball_copy.width - 1340) / 2;
        // const crop_y = (fireball_copy.height - 900) / 2;
        // fireball_copy.setCrop(crop_x, crop_y, 1340, 900);

        // set the position of the fireball_copy to be 160, 160
        // fireball_copy.setX(160);
        // fireball_copy.setY(160);
        // // set the origin to be 0, 0
        // fireball_copy.setOrigin(0, 0);


        this.#fireball.draw(fireball_copy, 160, 160)
        fireball_copy.destroy();




        // Draw the blank background on top of the fireball image
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
        this.#fireball.setX(Math.sin(this.game._frame_count / 100) * 50 + 50);
        this.#fireball.setY(Math.cos(this.game._frame_count / 100) * 50 + 50);

    }
}

export default CardInfo;

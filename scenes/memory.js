export default class Memory extends Phaser.Scene {
    constructor() {
        super('Memory');
    }

    preload() {
        // Load card back and front assets here
        this.load.image('cardBack', 'images/cardback.png');
        for (let i = 1; i <= 4; i++) {
            this.load.image(`card${i}`, `path/to/card${i}.png`);
        }
    }

    create() {
        // Create a shuffled list of pairs
        const cardKeys = ['card1', 'card1', 'card2', 'card2', 'card3', 'card3', 'card4', 'card4'];
        Phaser.Utils.Array.Shuffle(cardKeys);

        this.selectedCards = [];
        cardKeys.forEach((key, index) => {
            const x = 100 + (index % 4) * 100;
            const y = 100 + Math.floor(index / 4) * 140;
            const card = this.add.image(x, y, 'cardBack').setInteractive();
            card.frontTexture = key;
            card.on('pointerup', () => this.flipCard(card));
        });
    }

    flipCard(card) {
        if (this.selectedCards.length < 2 && !this.selectedCards.includes(card)) {
            card.setTexture(card.frontTexture);
            this.selectedCards.push(card);
            if (this.selectedCards.length === 2) {
                this.time.delayedCall(700, () => this.checkMatch());
            }
        }
    }

    checkMatch() {
        const [card1, card2] = this.selectedCards;
        if (card1.frontTexture !== card2.frontTexture) {
            card1.setTexture('cardBack');
            card2.setTexture('cardBack');
        }
        this.selectedCards = [];
    }
}
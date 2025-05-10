class Card {
    constructor(name, rarity, cost, description, image) {
        this.name = name;
        this.rarity = rarity;
        this.cost = cost;
        this.description = description;
        this.image = image;
    }

    getCardInfo() {
        return {
            name: this.name,
            rarity: this.rarity,
            cost: this.cost,
            description: this.description,
            image: this.image,
        };
    }

}
class Card {
    constructor(name, type, description, image) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.image = image;
    }

    getCardInfo() {
        return {
        name: this.name,
        type: this.type,
        description: this.description,
        image: this.image,
        };
    }

}
const resetCards = (cards, trainingWheels) => {
    return cards.map((card, index) => {
        return {
            char: card.char,
            morse: card.morse,
            active: index === 0,
            done: false,
            hint: trainingWheels
        };
    });
}

export default resetCards
const newState = (status, cards) => {
    let setNextActive = false;
    let setNextDone = true;

    return cards.map((card, index) => {
        let currentActive = false;
        let done = setNextDone;

        if (setNextActive) {
            currentActive = true;
            setNextActive = false;
        }
        if (card.active) {
            setNextActive = true;
            setNextDone = false;
        }
    
        return {
            char: card.char,
            morse: card.morse,
            active: currentActive,
            done: done,
            hint: done
        };
    });
}

export default newState
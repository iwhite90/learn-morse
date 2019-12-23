const morse = {
    'A': '. _',
    'B': '_ . . .',
    'C': '_ . _ .',
    'D': '_ . .',
    'E': '.',
    'F': '. . _ .',
    'G': '_ _ .',
    'H': '. . . .',
    'I': '. .',
    'J': '. _ _ _',
    'K': '_ . _',
    'L': '. _ . .',
    'M': '_ _',
    'N': '_ .',
    'O': '_ _ _',
    'P': '. _ _ .',
    'Q': '_ _ . _',
    'R': '. _ .',
    'S': '. . .',
    'T': '_',
    'U': '. . _',
    'V': '. . . _',
    'W': '. _ _',
    'X': '_ . . _',
    'Y': '_ . _ _',
    'Z': '_ _ . .'
}

const Morse = {
    getCard : char => {
        return {
            char: char,
            morse: morse[char]
        }
    },
    allCards : () => {
        return ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'].map(x => Morse.getCard(x));
    },
}

export default Morse

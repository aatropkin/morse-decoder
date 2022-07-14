const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let array = [];
    let arrayTwo = [];
    let result = [];

    for (let i = 0; i < expr.length; i += 10) {
        array.push(expr.slice(i, i + 10) );
    }

    for (let j = 0; j < array.length; j ++) {
        arrayTwo.push(array[j].replace(/10/gi, ".").replace(/11/gi, "-").replace(/0/gi, "").replace(/\*{10}/gi, " ") );
    }

    arrayTwo.forEach( (element) => {
        if (MORSE_TABLE[element] ) {
          result.push(MORSE_TABLE[element] );
        } else {
          result.push(" ");
        }
      })
      return result.join("");
}

module.exports = {
    decode
}

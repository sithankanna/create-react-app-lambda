const letterMap = {
    "A": 1,
    "I": 1,
    "J": 1,
    "Q": 1,
    "Y": 1,
    "B": 2,
    "K": 2,
    "R": 2,
    "C": 3,
    "G": 3,
    "L": 3,
    "S": 3,
    "D": 4,
    "M": 4,
    "T": 4,
    "E": 5,
    "H": 5,
    "N": 5,
    "X": 5,
    "U": 6,
    "V": 6,
    "W": 6,
    "O": 7,
    "Z": 7,
    "F": 8,
    "P": 8,
}


var lookUp = (char) => letterMap[char]
var add = (a, b) => a + b


function getNumber(input) {
    var name = input.replace(/[^a-zA-Z0-9]/g, '').toUpperCase()
    var nameArray = name.split('')
    const numArray = nameArray.map(lookUp)

    const sum = numArray.reduce(add, 0);
    return sum
}

export default getNumber

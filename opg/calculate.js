function parseFloatIsNumber(a) {

    const isNan = Number.isNaN(a);

    return isNan;
}

function add(a, b) {

    if (!parseFloatIsNumber(a) && !parseFloatIsNumber(b)) {
        const numberA = parseFloat(a);
        const numberB = parseFloat(b);
        return numberA + numberB;
    } else {
        throw new Error('Not a number');
    }
}

function subtract(a, b) {

    if (!parseFloatIsNumber(a) && !parseFloatIsNumber(b)) {
        const numberA = parseFloat(a);
        const numberB = parseFloat(b);
        return numberA - numberB;
    } else {
        throw new Error('Not a number');
    }
}
function multiply(a, b) {

    if (!parseFloatIsNumber(a) && !parseFloatIsNumber(b)) {
        const numberA = parseFloat(a);
        const numberB = parseFloat(b);
        return numberA * numberB;
    } else {
        throw new Error('Not a number');
    }
}
function divide(a, b) {

    if (!parseFloatIsNumber(a) && !parseFloatIsNumber(b)) {
        const numberA = parseFloat(a);
        const numberB = parseFloat(b);
        return numberA / numberB;
    } else {
        throw new Error('Not a number');
    }
}

module.exports = { parseFloatIsNumber, add, subtract, multiply, divide };
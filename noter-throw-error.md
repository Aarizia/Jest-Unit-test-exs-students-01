calculate - simple funktioner
+ - * /

eks: 
function add(a, b) {
    return a + b;
}

der er nogle udfordringer, nogle scenarier, hvor de ikke fungerer

build:dev: webpack-dev-server
build: webpack
test: --jest-watchAll

i princippet behøver vi ikke en dev server til at teste men vi kan gøre det for at have en reference til vores html server

hvis vi har et input element i html'en kan vi forvente at få input af typen string selvom det er tal:
'1'.
vi kan med js gribe fat i inputfeltets værdi (med qs), men den værdi vi får er af typen string.
heller ikke hvis vi har sat type="number" på vores html element
(det type="number" gør er, at vi kun kan skrive tal og ikke bogstaver, men værdien er stadig datatype string)
problem: vi kan ikke være sikre på, at vi modtager den rigtige datatype

i index.js (eller app.js):
link til funktionen:
const {add} = require('sti') uden .js, her ./opg/calculate

i index.html:
console.log(add(2, 4));
i consollen: 6 (number)

hvad hvis jeg skriver 
console.log(add('2', 4));
i consollen: 24 (number)

'' + number: js lægger 4 ind i stringen men giver mig stadig et number.
hvordan fixer vi det?
konvertere datatyper:
parseFloat() 

i add funktionen:
function add(a, b) {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    console.log(numA, numB);
    return numA + numB;
}

e er også et tal.
hvis jeg skriver i app:
console.log('e2' + 4);
så får jeg NaN i consollen.
det skal fixes

hvad hvis jeg sender et objekt?
console.log({}, 4);
i consollen: NaN

hvilken type er NaN?
function add(a, b) {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    console.log(numA, numB);

    console.log(typeof numA);

    return numA + numB;
}

console.log(typeof numA);
i consollen: number 
NaN er et tal
så jeg kan ikke tjekke på NaN's datatype for at se om der er kommet tekst ind som value

hvad adskiller NaN fra andre tal?
bruge funktion Number.isNaN()

function add(a, b) {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const isNan = Number.isNaN(numA);

    console.log(isNan);

    return numA + numB;
}

console.log(isNan);
i consollen: true

nu har jeg et redskab til at finde ud af om det, jeg parser, går galt - om det er NaN
så kan jeg teste på om det er det rigtige, jeg modtager

function add(a, b) {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const isNanA = Number.isNaN(numA);
    const isNanB = Number.isNaN(numB);

    (hvis det er et tal)
    if (!isNanA && !isNanB) {
        return numA + numB;
    } else {
        throw new Error('Not a number');
    }
}

vi har flere calculate funktioner, som også skal tjekke hvad datatypen er. vi kan genbruge ovenstående i dem.
undgå at gentage kode: vi sætter dem ind i en ny funktion:

i starten af filen:

function parseFloatIsNumber(a) {
    const numA = parseFloat(a);
    return isNanA = Number.isNaN(a)
}

function add(a, b) {
    if (!parseFloatIsNumber(a) && !parseFloatIsNumber(b)) {
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        return numA + numB;
    } else {
        throw new Error('Not a number');
    }
}
function minus(a, b) {
    if (!parseFloatIsNumber(a) && !parseFloatIsNumber(b)) {
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        return numA - numB;
    } else {
        throw new Error('Not a number');
    }
}
function multiply(a, b) {
    if (!parseFloatIsNumber(a) && !parseFloatIsNumber(b)) {
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        return numA * numB;
    } else {
        throw new Error('Not a number');
    }
}
function divide(a, b) {
    if (!parseFloatIsNumber(a) && !parseFloatIsNumber(b)) {
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        return numA / numB;
    } else {
        throw new Error('Not a number');
    }
}

module.exports = { parseFloatIsNumber, add, minus, multiply, divide }


// TEST //
hvordan kan vi teste på om den bliver et tal eller om den smider en fejlmeddelelse?

testfunktion til calculate: calculate.test.js

const { parseFloatIsNumber, add, minus, multiply, divide } = require('./calculate');

describe('simple math', () => {

    test('add', () => {
        expect(add(2, 5)).toBe(7);
    });
});

npm run test

hvis jeg trykker på f ser jeg kun fejlmeddelelserne
de går igennem

men hvad hvis jeg siger
    test('add', () => {
        expect(add(NaN, 5)).toBe(7);
    });

nu fejler den fordi jeg ikke har lavet en catch-funktion til at fange fejlen.

test('add throw error', () => {
    expect(() => add(NaN, 3)).toThrow('Not a number')
})

NB: 
toThrow('Not a number') - imellem '': sæt den fejlmeddelelse, du skrev inde i funktionen.
du kan også tage dele af stringen inde i Error-meddelelsen, f.eks. toThrow('Not')

Nu har jeg en funktion, som kan teste om fejltesningsfunktionen smider en fejl

du kan læse mere på mdn og jest (undersøg hvad der ellers er i jest)

øvelse: kaste en fejl og fange den i jest

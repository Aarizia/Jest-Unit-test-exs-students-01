automatiseret test ved indførsel af ny software - kvalitetssikre

forskellige slags test: 
unit test (en enkelt funktion eller class (medmindre det er en stor class med mange funktioner, definitionsspørgsmål)), 
integration test (funktioner i forhold til hinanden), 
end to end test (dom, funktioner, funktioner i forhold til hinanden)

sat op allerede
json fil
json server
build, test
dependencies

installere projekt inden vi kan køre det
md: opgavebeskrivelser

læse pdf i vscode m. extension: PDF Preview f.eks.

jest bliver installeret når vi kører npm i

(kør bare npm i til at starte med)

installere typer: @types/jest

opstarte server - package.json: build:dev
skriv npm run build:dev

gå ind på website, udfyld formular

jeg vil gerne validere at det jeg får frem på websiden er den rigtige data

i app filen: 

gennemgang af js koden

validering af input
kalde hjælpefunktioner - kaldes ind vha. require (og ikke import) fordi det kan jest bedst lide.
se hvor funktion kommer fra: ctrl click på funktionsnavn i app dokumentet
mange af dem ligger i util.js
validering af navn (returnerer værdien sand hvis valid)
validering af alder (returnerer værdien sand hvis valid)
hvis ikke valideret (!foran sandt udsagn): return. så stopper koden og intet sker

hvis der er gyldige værdier:
koden går videre. html element tilføjes under formularen osv.


// TEST //
jeg vil gerne starte med at teste funktioner i util.js
første funktion - generate text (genererer tekst under formular)
jeg vil gerne automatisk teste om det sker

jeg bruger jest
jest bruger export af funktioner i bunden af util.js dokumentet
jeg skal lave filen hvor jeg importerer funktionen

lav ny fil i opg mappen
kald den samme navn som funktionernes fil (her util) .test - util.test.js
jeg importerer funktioner, jeg gerne vil teste
const {generateText} = require('./util'); - de ligger i samme mappe
jeg vil gerne teste funktionen
i util.test.js:

describe beskriver hvad jeg gerne vil teste overordnet og kan indeholde flere funktioner
test og validate(...) er beskrivelser
describe('Test', () => {
    test('validate user text', => {
        // parametre: name, age
        expect(generateText('ole', '3')).toBe('ole (3 years old)');
    });
});

skal fyre op under jest inden der sker noget

ny terminal
i json-package: vi har et test script
"test": "jest --watchAll"
i terminalen: npm run test

nu kører testene
de parser også - det er gode nyheder

men vi kan prøve at skrive 4 i stedet for 3 i input mens toBe stadig er 3
så får vi en fejl, og vi får at vide hvor fejlen er opstået
hvis jeg giver den 3 i stedet for "3" så validerer den også
hvis jeg sætter navnet til et tal, får jeg en fejl
den accepterede et tal som navn, hvis jeg sætter det både i input og toBe
så måske skal jeg skrive noget mere validering, så navn ikke kan være et tal
det kan jeg f.eks. finde ud af ved at køre denne test

teste funktion validateEmail(email) af email i validate.js
lægge udsagn i variabler, så de kan være sande eller falske. returnere dem
model exports til jest

ny jest fil: 
validate.test.js

i filen:
const {validateEmail} = require('./validate');

får en fejl i terminalen fordi jest allerede kører (med parameter watchAll på scriptet) - det er fordi dokumentet er tomt

test('validation' () => {
    // parameter: email
    expect(validateEmail('shl@rts.dk')).toBe(true)
})

// MED FEJL
test('validation' () => {
    // parameter: email
    expect(validateEmail('shl@rtsdk')).toBe(true)
})
fejl: mangler . false returneres, så det giver en fejl

test evt begge veje: 
test('validation' () => {
    // parameter: email
    expect(validateEmail('shl@rtsdk')).toBe(false)
})
denne giver også sand

i opgaven er der også et link til stack overflow med eksempler på forskellige ting man kan teste på
her kan du kigge og udforske






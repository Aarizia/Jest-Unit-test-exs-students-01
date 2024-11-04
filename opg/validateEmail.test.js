const { validateEmail } = require('./validateEmail');

describe('validation of email', () => {

    test('check if email is a string and contains @ and .', () => {
        expect(validateEmail('hello@world.hi')).toBe(true);
        expect(validateEmail('hello@world.hi')).toBe(false);
        expect(validateEmail('helloworld.hi')).toBe(false);
        expect(validateEmail('hello@world')).toBe(true);
    });
});
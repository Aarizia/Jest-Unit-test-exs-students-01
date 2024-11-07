const { parseFloatIsNumber, add, subtract, multiply, divide } = require('./calculate');

describe('simple math function tests', () => {
    
    test('add', () => {
        expect(add(1, 3)).toBe(4);
        expect( () => {
            add(NaN, 3).toThrow('Not a number');
        });
    });

    test('subtract', () => {
        expect(subtract(1, 3)).toBe(-2);
        expect( () => {
            add(NaN, 3).toThrow('Not a number');
        });
    });

    test('multiply', () => {
        expect(multiply(2, 3)).toBe(6);
        expect( () => {
            add(NaN, 3).toThrow('Not a number');
        });
    });

    test('divide', () => {
        expect(divide(8, 4)).toBe(2);
        expect( () => {
            add(NaN, 3).toThrow('Not a number');
        });
    });
    
});
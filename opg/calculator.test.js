const { add, subtract, divide } = require('./calculator');

describe("Calculator functions", () => {

	test("add should return the sum of two numbers", () => {
		expect(add(1, 2)).toBe(3);
		expect(add(-1, -2)).toBe(-3);
		expect(add(1, -1)).toBe(0);
	});

	test("subtract should return the difference between two numbers", () => {
		expect(subtract(3, 2)).toBe(1);
		expect(subtract(-1, -2)).toBe(1);
		expect(subtract(1, -1)).toBe(2);
	});

    test('divide should return the quotient of the two numbers', () => {
		expect(divide(1, 1)).toBe(1);
		//expect(divide(10, 2)).toBe(8);
		//expect(divide(5, 3)).toBe(2);
    });
});
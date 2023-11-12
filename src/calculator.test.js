import calculator from "./calculator";

test('Testing addition : 1 + 2 = 3', () => {
    expect(calculator.add(1,2)).toBe(3);
});
test('Testing subtraction : 0 - 2 = -2', () => {
    expect(calculator.subtract(0,2)).toBe(-2);
});
test('Testing division : 1 / 2 = 0.5', () => {
    expect(calculator.divide(1,2)).toBe(0.5);
});
test('Testing division : 2 / 0 = Infinity', () => {
    expect(calculator.divide(2,0)).toBe(Infinity);
});
test('Testing multiplication : 3 * 3 = 9', () => {
    expect(calculator.multiply(3,3)).toBe(9);
});
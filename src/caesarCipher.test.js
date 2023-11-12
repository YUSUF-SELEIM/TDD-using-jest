import caesarCipher from "./caesarCipher";

test('Test 1', () => {
    expect(caesarCipher('attack at dawn',5)).toBe('fyyfhp fy ifbs');
});
test('Test 2', () => {
    expect(caesarCipher('a',5)).toBe('f');
});
test('Test 3', () => {
    expect(caesarCipher('YUSUF',12)).toBe('kgegr');
});
test('Test 4', () => {
    expect(caesarCipher('az',12)).toBe('ml');
});
test('Test 5', () => {
    expect(caesarCipher('tree',0)).toBe('tree');
});
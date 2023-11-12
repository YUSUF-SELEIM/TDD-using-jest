import reverseString from "./reverseString";

test('Test 1 : yusuf --> fusuy', () => {
    expect(reverseString('yusuf')).toBe('fusuy');
});
test('Test 2 : car --> rac', () => {
    expect(reverseString('car')).toBe('rac');
});
test('Test 3: dead --> daed', () => {
    expect(reverseString('dead')).toBe('daed');
});
test('Test 4 : 121 --> 121', () => {
    expect(reverseString('121')).toBe('121');
});
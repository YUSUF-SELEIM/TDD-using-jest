//A capitalize function that takes a string and returns it
//with the first character capitalized.

import capitalize from "./capitalize";

test('Test 1 : yusuf --> Yusuf', () => {
    expect(capitalize('yusuf')).toBe('Yusuf');
});
test('Test 2 : Yusuf --> Yusuf', () => {
    expect(capitalize('Yusuf')).toBe('Yusuf');
});
test('Test 3 : car --> Car', () => {
    expect(capitalize('car')).toBe('Car');
});
test('Test 4 : #### --> ####', () => {
    expect(capitalize('####')).toBe('####');
});

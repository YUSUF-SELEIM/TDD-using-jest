import analyzeArray from "./analyzeArray";

test('Test 1', () => {
    const object =  analyzeArray([1,8,3,4,2,6]);
    expect(object).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
});
test('Test 2', () => {
    const object =  analyzeArray([1,2,3]);
    expect(object).toEqual({
        average: 2,
        min: 1,
        max: 3,
        length: 3
      });
  });
  test('Test 3', () => {
    const object =  analyzeArray([0]);
    expect(object).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 1
      });
  });
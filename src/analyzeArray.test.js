import { analyzeArray } from "./analyzeArray";

test('returns all values', () => {
    expect(analyzeArray([1,5,4,2,3,6])).toStrictEqual({
        max: 6,
        average: 3.5,
        min: 1,
        length: 6
    });
})
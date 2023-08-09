import { capitalize } from "./capitalize"

test('capitalize first letter of a string', () => {
    expect(capitalize("string")).toBe('String')
})
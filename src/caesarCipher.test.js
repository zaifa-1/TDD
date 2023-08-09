import { caesarCipher } from "./caesarCipher";

test('encodes a word', () =>{
    expect(caesarCipher('abc')).toBe('bcd');
})

test('encodes a word with Capital letters', () =>{
    expect(caesarCipher('aBc')).toBe('bCd');
})

test('works with z and Z', () =>{
    expect(caesarCipher('zenZesty')).toBe('afoAftuz');
})
const reverseString = require('../reverse');

describe('reverse the string', () => {
    const newString = 'peter'
    const reversefunction = reverseString(newString);
    test('test', () => {
        expect(reversefunction).toBe('retep')
    });
});



const stringLength = require('../string.js')


describe('test the count of character of a string', () => {
    test('should return the count of the character', () => {
        expect(stringLength('dennis')).toBe(6);
    });
    test('this should throw an erro', () => {
        expect(()=>stringLength('')).toThrow();
    });
    test('This will throw error', () => {
        expect(()=>stringLength('dcgscghfhfhdhgsdghsdg') ).toThrow();
    }); 
});

    
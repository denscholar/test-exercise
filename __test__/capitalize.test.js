const capitalize = require('../capitalize.js');

describe('capitalize the first letter', () => {
    const cap = 'dennis';
    const capitalizeFirstLetter = capitalize(cap);
    test('capitalize', () => {
        expect(capitalizeFirstLetter).toBe('Dennis');    
    });
});
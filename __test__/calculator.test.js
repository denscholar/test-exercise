const Calculator = require('../calculator.js');


describe('calculator', () => {
    test('test1', () => {
        const a = new Calculator();
        const add = a.add(2,2);
        expect(add).toBe(4);
    });
    test('test2', () => {
        const a = new Calculator();
        const sub = a.subtract(5,3);
        expect(sub).toBe(2);
    });
    test('test3', () => {
        const a = new Calculator();
        const mul = a.multiply(5,3);
        expect(mul).toBe(15);
    });
    
    test('test4', () => {
        const a = new Calculator();
        const div = a.divide(6,3);
        expect(div).toBe(2);
    });
});
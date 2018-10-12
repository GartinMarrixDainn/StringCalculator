const add = require('./calculator');


it('should return zero from an empty string', () => {
    expect(add('')).toBe(0);
});

it('should return a single number from when string contains a single number', () => {
    expect(add('5')).toBe(5);
});

it('should return sum of two numbers', () => {
    expect(add('1,2')).toBe(3);
});

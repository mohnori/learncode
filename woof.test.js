const woof = require('./woof')

test('Oshould return number of woofs', function () {
    const result = woof("Moh");
    expect(result).toBe('3woof!')

});


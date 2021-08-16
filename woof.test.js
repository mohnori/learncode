const {woof,addSum} = require("./woof")
// const {addSum} = require("./woof")

test('should return number of woofs', () => {
    const result = woof("Moh");
    expect(result).toBe(3);
    expect(woof()).toBe(null)
});

test('should return Sum of 2 + 5 = 7',  () => {
    expect(addSum(2,5)).toBe(7);

});

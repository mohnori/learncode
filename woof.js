function woof(str) {
    if (typeof str !== "string") {
        return null;
    }

    return str.length ;
};

function addSum(a,b) {
    return a + b;
};

exports.woof = woof;
exports.addSum = addSum;
//module.exports = addSum;

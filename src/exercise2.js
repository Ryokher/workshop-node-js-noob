exports.run = function (input) {
    var res = input.split("");
    var max = 0;
    for (i = 0; val = res[i]; i++) {
        if (val > max) {
            max = val;
        }
    }
    return Number(max);
};

exports.run = function (input) {
    var repeat = function (chiffre, txt) {
        var result = txt;
        for (var a = 1; a < chiffre; a++)
            result += `, ${txt}`;
        return result;
    }
    return input(3, "Beetlejuice", repeat);
    /** */
};

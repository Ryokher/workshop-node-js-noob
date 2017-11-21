exports.run = function (input) {
    
    var fs = require('fs');
    
    fs.readdir(input.directory, function (err, files) {
        if (err) {
            return console.error(err)
        } else {
            input.showDone(files.length);
        }
    })
};

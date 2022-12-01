const fs = require("fs");

function get_input(name) {
    return fs.readFileSync(name).toString().split(/\r?\n/);
}

module.exports.get_input = get_input;
const {get_input} = require("../../scripts.js");
const inputs = get_input("./input.txt");

const input = inputs[0].split("");

function get_solution1() {
    return get_solution(4);
}

function get_solution2() {
    return get_solution(14);
}

function get_solution(max) {
    const old_characters = [];

    for (var i = 0; i < input.length; i++) {
        const character = input[i];
        old_characters.push(character);

        // Stop loop once we get our number of unique characters.
        if (new Set(old_characters).size === max) break;

        // Maintain maximum last characters.
        if (old_characters.length >= max) {
            old_characters.shift();
        }
    }

    return i + 1;
}

console.log("Solution 1:", get_solution1());
console.log("Solution 2:", get_solution2());

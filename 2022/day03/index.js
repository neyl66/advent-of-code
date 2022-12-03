const {get_input} = require("../../scripts.js");
const inputs = get_input("./input.txt");

function get_score(character) {
    const length = 26;

    // Look up tables of alphabet characters mapped to score.
    const scores_lowercase = Array.from({length}, (_, i) => i).reduce((a, b) => (a[String.fromCharCode(97 + b)] = b + 1, a), {});
    const scores_uppercase = Array.from({length}, (_, i) => 27 + i).reduce((a, b) => (a[String.fromCharCode(65 + b - 27)] = b, a), {});

    // Combine.
    const score_table = {...scores_lowercase, ...scores_uppercase};

    return score_table[character];
}

function get_data(input) {
    const items = {};
    input.forEach((c) => {
        if (!items[c]) items[c] = 0;

        items[c] += 1;
    });
    return items;
}

function get_solution1() {
    let sum = 0;
    for (let i = 0; i < inputs.length; i++) {
        const rucksack = inputs[i].split("");

        // Prepare list of characters.
        const items = {
            first: get_data(rucksack.slice(0, rucksack.length / 2)),
            last: get_data(rucksack.slice(rucksack.length / 2, rucksack.length)),
        };

        // Sum up a score of shared characters.
        for (const [key, value] of Object.entries(items.first)) {
            if (!items.last[key]) continue;

            sum += get_score(key);
        }
    }

    return sum;
}

function get_solution2() {
    let sum = 0;

    for (let i = 0; i < inputs.length; i += 3) {

        // Prepare list of characters.
        const items = {
            a: get_data(inputs[i].split("")),
            b: get_data(inputs[i + 1].split("")),
            c: get_data(inputs[i + 2].split("")),
        };

        // Sum up a score of shared characters.
        for (const [key, value] of Object.entries(items.a)) {
            if (!items.b[key] || !items.c[key]) continue;

            sum += get_score(key);
        }
    }

    return sum;
}

console.log("Solution 1:", get_solution1());
console.log("Solution 2:", get_solution2());

const {get_input} = require("../../scripts.js");
const inputs = get_input("./input-sample.txt");

function get_range([from, to]) {
    let range = [];

    for (let i = parseInt(from); i <= parseInt(to); i++) {
        range.push(i);
    }

    return range;
}

function get_solution1() {
    let sum = 0;

    for (const input of inputs) {
        const [left, right] = input.split(",");

        const left_range = get_range(left.split("-"));
        const right_range = get_range(right.split("-"));

        let f = left_range.filter(value => right_range.includes(value));

        if (f.length > 0) {
            if (left_range.every((v) => f.includes(v)) || right_range.every((v) => f.includes(v))) {
                sum++;
            }
        }
    }

    return sum;
}

function get_solution2() {
    let sum = 0;

    for (const input of inputs) {
        const [left, right] = input.split(",");

        const left_range = get_range(left.split("-"));
        const right_range = get_range(right.split("-"));

        let f = left_range.filter(value => right_range.includes(value));

        if (f.length > 0) {
            sum++;
        }

    }

    return sum;
}

console.log("Solution 1:", get_solution1());
console.log("Solution 2:", get_solution2());

const {get_input} = require("../../scripts.js");
const inputs = get_input("./input.txt");

function get_stack() {
    const stack = {};

    for (const input of inputs) {
        if (input[0] === "m") break;

        const split_input = input.split("");

        // Extract character data from input to our stack.
        let j = 1;
        for (let i = 1; i < split_input.length; i+= 4) {
            const character = split_input[i];
            if (character.match(/[a-z]/gi)) {
                if (!stack[j]) stack[j] = [];

                stack[j].unshift(character);
            }

            j++;
        }

    }

    return stack;
}

function get_solution1() {
    const stacks = get_stack();

    for (const input of inputs) {
        if (input[0] !== "m") continue;

        // Extract instructions.
        const [move, from, to] = input.match(/[0-9]+/g);

        // First IN Last OUT one by one.
        for (let i = 0; i < move; i++) {
            const popped = stacks[from].pop();
            stacks[to].push(popped);
        }

    }

    // Prepare solution answer.
    let result = [];
    for (const values of Object.values(stacks)) {
        result.push(values.at(-1));
    }

    return result.join("");
}

function get_solution2() {
    const stacks = get_stack();

    for (const input of inputs) {
        if (input[0] !== "m") continue;

        // Extract instructions.
        const [move, from, to] = input.match(/[0-9]+/g);

        // First IN Last OUT all at once.
        const spliced = stacks[from].splice(stacks[from].length - move, stacks[from].length);
        stacks[to].push(...spliced);
    }

    // Prepare solution answer.
    let result = [];
    for (const values of Object.values(stacks)) {
        result.push(values.at(-1));
    }

    return result.join("");
}

console.log("Solution 1:", get_solution1());
console.log("Solution 2:", get_solution2());

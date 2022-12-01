const {get_input} = require("../../scripts.js");
const inputs = get_input("./input.txt");

function get_sum(nums) {
    return nums.reduce((a, b) => a + b, 0);
}

const elves = [];
let elf = {};
let elf_values = [];
for (let i = 0; i < inputs.length; i++) {
    const input = parseInt(inputs[i]) || 0;

    // Init elf.
    if (Object.keys(elf).length === 0) {
        elf = {
            values: [],
        };
    }

    if (input) {
        elf_values.push(input);
    } else {

        elves.push({
            values: elf_values,
            sum: get_sum(elf_values),
        });
        
        elf_values = [];
    }
}

// Sort elves by sum Descending.
elves.sort((a, b) => b.sum - a.sum);

console.log("Solution 1:", elves[0].sum);
console.log("Solution 2:", get_sum([elves[0].sum, elves[1].sum, elves[2].sum]));

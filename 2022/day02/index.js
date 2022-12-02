const {get_input} = require("../../scripts.js");
const inputs = get_input("./input.txt");

const lookup_table = {
    A: "r", X: "r", // Rock
    B: "p", Y: "p", // Paper
    C: "s", Z: "s", // Scissors
};

const win_rules = {
    A: "Y", // Rock
    B: "Z", // Paper
    C: "X", // Scissors
};

const lose_rules = {
    A: "Z", //
    B: "X", //
    C: "Y", //
};

function get_score(you, me) {

    const score_rules = {
        X: 1, A: 1, // Rock
        Y: 2, B: 2, // Paper
        Z: 3, C: 3, // Scissors
    
        L: 0, // Lose
        D: 3, // Draw
        W: 6, // Win
    };

    let score = 0;

    score += score_rules[me];
    
    let outcome = "";
    if (lookup_table[you] === lookup_table[me]) {
        outcome = "D";
    } else if (win_rules[you] === me) {
        outcome = "W";
    } else {
        outcome = "L";
    }

    score += score_rules[outcome];

    return score;
}

function get_solution1() {
    let score = 0;

    for (const input of inputs) {
        const [you, me] = input.split(" ");

        score += get_score(you, me);
    }

    return score;
}

function get_solution2() {
    let score = 0;

    const outcome_table = {
        X: "L",
        Y: "D",
        Z: "W",
    };

    for (const input of inputs) {
        let [you, me] = input.split(" ");

        // Switch me to wanted outcome.
        const wanted_outcome = outcome_table[me];
        if (wanted_outcome === "D") {
            me = you;
        } else if (wanted_outcome === "L") {
            me = lose_rules[you];
        } else {
            me = win_rules[you];
        }

        score += get_score(you, me);
    }

    return score;
}

console.log("Solution 1:", get_solution1());
console.log("Solution 2:", get_solution2());

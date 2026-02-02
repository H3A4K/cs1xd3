function evaluate(a, b) {
    const op_e = document.getElementById("operation");
    if (!op_e) {
        return;
    }
    let op = op_e.value;

    let values = [];
    document.querySelectorAll("[type='number']").forEach((e) => values.push(parseInt(e.value)));

    switch (op) {
        case "+": return values[0] + values[1];
        case "-": return values[0] - values[1];
        case "*": return values[0] * values[1];
        case "/": return values[0] / values[1];
        case "%": return values[0] % values[1];
    }
}

// let button = document.querySelector("[type='button']");
let inputs = []
document.querySelectorAll("[type='number']").forEach((e) => inputs.push(e));
inputs.push(document.getElementById("operation"));

const disp = document.getElementById("output");

inputs.forEach((e) => e.addEventListener("change", () => disp.value = evaluate()));

disp.value = evaluate()
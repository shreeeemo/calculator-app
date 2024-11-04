function appendNumber(number) {
    document.getElementById('result').value += number;
}

function performOperation(operation) {
    document.getElementById('result').value += ` ${operation} `;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (e) {
        alert('Invalid input');
    }
}

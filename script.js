function generateMatrixInputs() {
    let rows = document.getElementById('rows').value;
    let columns = document.getElementById('columns').value;
    let matrixInputs = document.getElementById('matrixInputs');

    matrixInputs.innerHTML = '';
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let input = document.createElement('input');
            input.type = 'number';
            input.id = `matrix-${i}-${j}`;
            input.placeholder = `Element [${i + 1},${j + 1}]`;
            matrixInputs.appendChild(input);
        }
        matrixInputs.appendChild(document.createElement('br'));
    }

    document.querySelector('button[onclick="generateMatrixInputs()"]').style.display = 'none';
    document.querySelector('button[onclick="calculateLDU()"]').style.display = 'block';
}

function getMatrixFromInputs(rows, columns) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < columns; j++) {
            row.push(parseFloat(document.getElementById(`matrix-${i}-${j}`).value));
        }
        matrix.push(row);
    }
    return matrix;
}

function formatMatrix(matrix) {
    return matrix.map(row => row.join(' ')).join('\n');
}
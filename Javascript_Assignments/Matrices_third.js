function determinant(matrix) {
    if (matrix.length === 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }

    let det = 0;
    for (let i = 0; i < matrix.length; i++) { 
        let submatrix = getSubmatrix(matrix, i);
        det += (i % 2 === 0 ? 1 : -1) * matrix[0][i] * determinant(submatrix);
    }
    return det;
}

function getSubmatrix(matrix, index) {
    let submatrix = [];
    for (let i = 1; i < matrix.length; i++) {
        // console.log(matrix[i]);
        let row = matrix[i].filter((val, j) => j !== index);
        console.log(row);
        submatrix.push(row);

    }
    return submatrix;
}

let matrix = [[1, 1, 1], [1, 1, 6], [7, 8, 9]];
console.log(determinant(matrix));
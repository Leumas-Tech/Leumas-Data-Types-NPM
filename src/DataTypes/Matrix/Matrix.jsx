class Matrix {
    constructor(rows, cols, defaultValue = 0) {
        this.rows = rows;
        this.cols = cols;
        this.data = Array.from({ length: rows }, () => Array(cols).fill(defaultValue));
    }

    // Method to display the matrix
    display() {
        return this.data.map(row => row.join('\t')).join('\n');
    }

    // Method to set a value at a specific position
    setValue(row, col, value) {
        if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
            this.data[row][col] = value;
        } else {
            throw new Error("Index out of bounds");
        }
    }

    // Method to get a value at a specific position
    getValue(row, col) {
        if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
            return this.data[row][col];
        } else {
            throw new Error("Index out of bounds");
        }
    }

    // Method to add two matrices
    static add(matrixA, matrixB) {
        if (matrixA.rows !== matrixB.rows || matrixA.cols !== matrixB.cols) {
            throw new Error("Matrices must have the same dimensions to be added");
        }
        let result = new Matrix(matrixA.rows, matrixA.cols);
        for (let i = 0; i < matrixA.rows; i++) {
            for (let j = 0; j < matrixA.cols; j++) {
                result.data[i][j] = matrixA.data[i][j] + matrixB.data[i][j];
            }
        }
        return result;
    }

    // Method to multiply two matrices
    static multiply(matrixA, matrixB) {
        if (matrixA.cols !== matrixB.rows) {
            throw new Error("Number of columns in first matrix must equal number of rows in second matrix");
        }
        let result = new Matrix(matrixA.rows, matrixB.cols);
        for (let i = 0; i < matrixA.rows; i++) {
            for (let j = 0; j < matrixB.cols; j++) {
                result.data[i][j] = 0;
                for (let k = 0; k < matrixA.cols; k++) {
                    result.data[i][j] += matrixA.data[i][k] * matrixB.data[k][j];
                }
            }
        }
        return result;
    }

    // Method to transpose a matrix
    transpose() {
        let result = new Matrix(this.cols, this.rows);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                result.data[j][i] = this.data[i][j];
            }
        }
        return result;
    }
}
export default Matrix
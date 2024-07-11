import React, { useState } from 'react';
import Matrix from './Matrix'; // Assuming Matrix class is in the same directory

const MatrixComponent = () => {
    const [matrixA, setMatrixA] = useState(new Matrix(2, 2));
    const [matrixB, setMatrixB] = useState(new Matrix(2, 2));
    const [resultMatrix, setResultMatrix] = useState(null);
    const [message, setMessage] = useState("");

    const handleSetValue = (matrix, setMatrix, row, col, value) => {
        matrix.setValue(row, col, value);
        setMatrix(new Matrix(matrix.rows, matrix.cols, 0)); // Force re-render
        setMessage(`Set value at (${row}, ${col}) to ${value}`);
    };

    const handleAddMatrices = () => {
        try {
            const result = Matrix.add(matrixA, matrixB);
            setResultMatrix(result);
            setMessage("Matrices added successfully");
        } catch (error) {
            setMessage(error.message);
        }
    };

    const handleMultiplyMatrices = () => {
        try {
            const result = Matrix.multiply(matrixA, matrixB);
            setResultMatrix(result);
            setMessage("Matrices multiplied successfully");
        } catch (error) {
            setMessage(error.message);
        }
    };

    const handleTransposeMatrixA = () => {
        const result = matrixA.transpose();
        setResultMatrix(result);
        setMessage("Matrix A transposed successfully");
    };

    return (
        <div>
            <h3>Matrix Operations</h3>
            <div>
                <h4>Matrix A</h4>
                <textarea value={matrixA.display()} readOnly rows={4} cols={20} />
                <div>
                    <button onClick={() => handleSetValue(matrixA, setMatrixA, 0, 0, Math.floor(Math.random() * 10))}>Set Random Value at (0, 0)</button>
                </div>
            </div>
            <div>
                <h4>Matrix B</h4>
                <textarea value={matrixB.display()} readOnly rows={4} cols={20} />
                <div>
                    <button onClick={() => handleSetValue(matrixB, setMatrixB, 0, 0, Math.floor(Math.random() * 10))}>Set Random Value at (0, 0)</button>
                </div>
            </div>
            <div>
                <button onClick={handleAddMatrices}>Add Matrices</button>
                <button onClick={handleMultiplyMatrices}>Multiply Matrices</button>
                <button onClick={handleTransposeMatrixA}>Transpose Matrix A</button>
            </div>
            {resultMatrix && (
                <div>
                    <h4>Result Matrix</h4>
                    <textarea value={resultMatrix.display()} readOnly rows={4} cols={20} />
                </div>
            )}
            <div>{message}</div>
        </div>
    );
};

export default MatrixComponent;

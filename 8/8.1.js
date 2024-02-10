// 8.1) It depends on what programming language is used.
// But in Javascript, array is the best way to store matrix data.
// You can create a two-dimensional array to represent a matrix where
// each element in the array is an array itself, forming rows and columns.

// Example
// Matrix size
const rows = 3;
const cols = 3;

// Declare 2d array for the matrix
let matrix = [];

// Initialize the 0 matrix
for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
        matrix[i][j] = 0;
    }
}

// Assign values to specific positions
matrix[0][0] = 1;
matrix[0][1] = 2;
matrix[0][2] = 3;
matrix[1][0] = 4;
matrix[1][1] = 5;
matrix[1][2] = 6;
matrix[2][0] = 7;
matrix[2][1] = 8;
matrix[2][2] = 9;

console.log(matrix);
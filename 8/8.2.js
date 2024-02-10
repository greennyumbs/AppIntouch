function determinant(A, N) {
    if (N === 1) {
        return A[0][0]; // case for 1x1 matrix
    } else {
        let det = 0;
        for (let i = 0; i < N; i++) {
            let sign = (i % 2 === 0) ? 1 : -1; // Reverse sign for odd number
            let minor = [];
            for (let j = 1; j < N; j++) {
                minor[j - 1] = [];
                for (let k = 0; k < N; k++) {
                    if (k !== i) {
                        minor[j - 1].push(A[j][k]);
                    }
                }
            }
            det += sign * A[0][i] * determinant(minor, N - 1); // Recursive call
        }
        return det;
    }
}

// Example
const A = [
    [4, 3, 1, 0],
    [-1, 2, -3, 5],
    [0, 1, -1, 2],
    [0, 2, -3, 5]
];
const N = 4;
const y = determinant(A, N);
console.log(y);

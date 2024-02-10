const n = 4;

// Upper part to middle
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    for (let j = 0; j < 2 * n - 2 * i; j++) {
        row += i;
    }
    for (let j = i - 1; j > 0; j--) {
        row += j;
    }
    console.log(row);
}

// Lower part
for (let i = n - 1; i > 0; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    for (let j = 0; j < 2 * n - 2 * i; j++) {
        row += i;
    }
    for (let j = i - 1; j > 0; j--) {
        row += j;
    }
    console.log(row);
}

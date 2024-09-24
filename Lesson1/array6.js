function sumAll(...args) {
    return args.reduce((sum, current) => sum + current);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10
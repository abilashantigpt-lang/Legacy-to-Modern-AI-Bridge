
const transactionAmount = 100000;
console.log("Processing...");

 if (typeof module !== 'undefined') { module.exports = { transactionAmount: typeof transactionAmount !== 'undefined' ? transactionAmount : 0 }; }
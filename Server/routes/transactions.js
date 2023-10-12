const express = require('express');
const router = express.Router();

// Simulated Database for transactions (this should be replaced with a real database)
const transactions = [
    { id: 1, userId: 1, creditId: 1, amount: 100 },
    { id: 2, userId: 2, creditId: 2, amount: 50 },
];

router.get('/:userId', (req, res) => {
    const userTransactions = transactions.filter(t => t.userId === parseInt(req.params.userId));
    res.json(userTransactions);
});

// I will have additional routes for creating transactions, etc.

module.exports = router;

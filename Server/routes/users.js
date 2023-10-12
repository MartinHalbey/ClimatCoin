const express = require('express');
const router = express.Router();

// Simulated Database for users (this will be replaced with a real database)
const users = [
    { id: 1, name: 'Alice', creditsOwned: 1500 },
    { id: 2, name: 'Bob', creditsOwned: 500 },
];

router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

// Here, I will also have routes for user registration, updates, etc.

module.exports = router;

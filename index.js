// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an Express app
const app = express();
const port = 3000;

// Use middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
// Route: Home
app.get('/', (req, res) => {
    res.send('Welcome to My API Project!');
});

// Route: Get Users
app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: 'Alice TEST' },
        { id: 2, name: 'Bob' },
    ];
    res.json(users);
});

// Route: Add a User
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = Math.floor(Math.random() * 1000); // Assign a random ID
    res.status(201).json({
        message: 'User added successfully',
        user: newUser,
    });
});

// Route: Update a User
app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    res.json({
        message: `User with ID ${userId} updated successfully`,
        user: updatedUser,
    });
});

// Route: Delete a User
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({
        message: `User with ID ${userId} deleted successfully`,
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

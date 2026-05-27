const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS Template Engine
app.set('view engine', 'ejs');

// Route to display form
app.get('/', (req, res) => {
    res.render('form');
});

// Route to handle form submission
app.post('/submit', (req, res) => {

    const student = {
        name: req.body.name,
        age: req.body.age,
        course: req.body.course,
        email: req.body.email
    };

    res.render('result', { student });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

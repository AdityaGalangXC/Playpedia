// server.js
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from src folder
app.use(express.static(path.join(__dirname, 'src')));

// Make src/index.html as root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Hide real path - example
app.get('/new-path', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'path', 'file.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

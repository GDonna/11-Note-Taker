const router = require('express').Router();
const path = require('path');

// HTML routes returning the notes.html files
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// HTML routes returning the index.html files

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

module.exports = router;
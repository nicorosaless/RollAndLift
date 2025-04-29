const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { saveInput } = require('./mongo_handler');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post('/api/save', async (req, res) => {
    try {
        const data = req.body;
        await saveInput(data);
        res.status(200).send({ message: 'Data saved successfully!' });
    } catch (error) {
        res.status(500).send({ message: 'Error saving data', error });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
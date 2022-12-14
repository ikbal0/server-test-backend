require('dotenv').config();

const express = require('express');
const app = express();
const PORT = '8080';

app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.user)
    res.status(200).json({message: 'get success'})
})

app.listen(
    PORT,
    () => console.log(`server is online on http://localhost:${PORT}`)
)
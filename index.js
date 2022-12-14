require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080

app.use(express.json());

const createRoute = require('./routes/create');
app.use('/create', createRoute)

app.listen(
    PORT,
    () => console.log(`server is online on http://localhost:${PORT}`)
)
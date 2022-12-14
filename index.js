require('dotenv').config();
const { default: mongoose } = require('mongoose');
const cors = require('cors')
const path = require('path')
const createRoute = require('./routes/create');
const fileUpload = require('express-fileupload');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080

app.use(express.json())
.use(cors())
.use(fileUpload())
.listen(
    PORT,
    () => console.log(`server is online on http://localhost:${PORT}`)
)

app.use('/create', createRoute)

// mongoose.connect(process.env.MONGODB_URI, () => console.log('connect to mongodb!'))

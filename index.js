require('dotenv').config();
const { default: mongoose } = require('mongoose');
const cors = require('cors')
const path = require('path')
const createRoute = require('./routes/create');
const editRoute = require('./routes/edit');
const viewRoute = require('./routes/view');
const fileUpload = require('express-fileupload');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())
.use(cors())
.use(fileUpload())
.use('/public', express.static(__dirname + "/public"))
.listen(
    PORT,
    () => console.log(`server is online on http://localhost:${PORT}`)
)

app.use('/create', createRoute)
app.use('/edit', editRoute)
app.use('/view', viewRoute)

mongoose.connect(process.env.MONGODB_URI, () => console.log('connect to mongodb!'))

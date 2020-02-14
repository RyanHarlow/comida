const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT || 3001;
const apiRouter = require('./api/api')

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.urlencoded({extended: true}))
// app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', apiRouter)


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})
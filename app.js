const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;
const apiRouter = require('./api/api')

app.use('/api', apiRouter)


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})
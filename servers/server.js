const express = require('express');
const app = express();
// const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const port = process.env.PORT || 5000;
const route = require('./routes/index');
const login = require('./routes/login');

app.use(helmet());

// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', route);
app.use('/api/login', login);

app.use((req, res, next) => {
    res.status(404).send('Can Not Find Page!!');
});

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})

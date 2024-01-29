const express = require('express');
const dotenv = require('dotenv');
const router = require('./router/endpoint');
const cors = require('cors');
dotenv.config();

const corsOption = ({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204
});

const app = express(); 
app.use(cors(corsOption));
app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000; 
const host = process.env.HOST;

app.listen(port, host, () => {
    console.log(`server up and runnig ad http://${host}:${port}`);
})

'use strict'

const express = require('express');
const port = process.env.PORT || 3200;
const taskRoutes = require('../src/taks/task.routes');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())

app.use('/v1', taskRoutes);

exports.initServer = ()=>{
    app.listen(port)
    console.log(`Server http running in port ${port}`);
}
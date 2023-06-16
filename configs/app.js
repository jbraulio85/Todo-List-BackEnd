'use strict'

const express = require('express');
const port = process.env.PORT || 3200;
const taskRoutes = require('../src/taks/task.routes');

app.use(express.urlencoded({extended: false}));
app.use(express.json);

app.use('/v1', taskRoutes);

exports.initServer = ()=>{
    app.listen(port)
    console.log(`Server http running in port ${port}`);
}
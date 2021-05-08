"use strict";

const fs = require('fs');
const appRoot = require('app-root-path');

const accessLogStream = fs.createWriteStream(
    //path.join(__dirname, 'access.log'), 
    `${appRoot}/log/access.log`,
    { flags: 'a' }
);

module.exports = accessLogStream;


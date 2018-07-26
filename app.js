'use strict'
const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('<html><b>Hello once more World!</b></html>'))
module.exports = app
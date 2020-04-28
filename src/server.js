const express = require('express');
const cors = require('cors');

const router = require('./routes');

const app = express();
app.use(cors());  
app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(router);

require('./database');





app.listen(3300, console.log('Running'));
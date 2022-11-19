const express = require('express');
const path = require('path');



const checkListRouter = require('./src/routes/checklist');
const rootRouter = require('./src/routes/index');

const app  = express();
// Data Base
require('./config/database');


app.use(express.json());


app.use('/checklists',checkListRouter);
app.use('/', rootRouter);


app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');


app.listen(3000, () => {
    console.log('Servidor iniciado');
})
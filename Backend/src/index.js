const express = require ('express');
const morgan  = require ('morgan');
const path    = require ('path');

const app = express();

//Setting
app.set('port',process.env.port||3000);

//Middelwares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/abm',require('./routes/transaction.router'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

//Starting the Server
app.listen(app.get('port'),()=>{
    console.log('Server on port ',app.get('port'));
});
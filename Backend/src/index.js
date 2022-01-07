const express = require ('express');
const morgan  = require ('morgan');
const path    = require ('path');
const cors    = require ('cors');
const dotenv = require('dotenv');


const { connection } = require ('./database');

const app = express();

//Setting
dotenv.config();
app.set('port',process.env.PORT || 3050);

//Middelwares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/abm',require('./routes/transaction.router'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

//Starting the Server
app.listen(app.get('port'),()=>{
    console.log('Server on port ',app.get('port'));
});
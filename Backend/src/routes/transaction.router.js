const express = require ('express');
const router  = express.Router();

const Transaction = require ('../models/transaction');

router.get('/', async(req, res)=>{
    console.log('method get');
});

module.exports = router;
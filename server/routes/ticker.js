const express=require('express');
const router=express.Router();
const { fetchTickers, storeTickers } = require('../controllers/ticker');
 
router.get('/',storeTickers);

router.get('/ticker',fetchTickers)

module.exports=router;
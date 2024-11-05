const express=require('express');
const router=express.Router();
const axios=require('axios');
const Ticker = require('../models/ticker');

router.get('/',async(req,res)=>{
    try {
        const response=await axios.get('https://api.wazirx.com/api/v2/tickers');
        const data=Object.values(response.data).slice(0,10);

        const tickers=data.map((data)=>({
            name:data?.name,
            volume:data.volume,
            buyPrice:parseFloat(data.buy),
             sellingPrice:parseFloat(data.sell),
             baseUnit:data.base_unit,
            
             lastPrice:parseFloat(data.last),

        }));
        await Ticker.insertMany(tickers);
    
      return res.json(tickers);

        
    } catch (error) {
        return res.status(500).json({success:'false',message:'Error in Data fetching',error})
    }
});

module.exports=router;
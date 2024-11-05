const Ticker = require("../models/ticker");
const axios=require('axios');
const storeTickers=async(req,res)=>{
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
}

const fetchTickers=async(req,res)=>{
    try{
        const tickers=await Ticker.find();
        return res.status(200).json(tickers);

    }catch(error){
        return res.status(500).json({success:'false',message:'Error in  fetching',error})

    }
}
module.exports={
    storeTickers,
    fetchTickers
}

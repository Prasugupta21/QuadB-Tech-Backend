const Ticker = require("../models/ticker");
const axios=require('axios');
const storeTickers=async(req,res)=>{
    try {
        const response=await axios.get('https://api.wazirx.com/api/v2/tickers');
        const data=Object.values(response.data).sort((a,b)=>b.last-a.last).slice(0,10);

        const tickers=data.map((data)=>({
            
            name:data.name.slice(0,3),
            volume:data.volume,
            buyPrice:data.buy,
             sellingPrice:data.sell,
             baseUnit:data.base_unit,
            
             lastPrice:data.last,

        }));
        await Ticker.deleteMany({});
        await Ticker.insertMany(tickers);
    
      return res.json(tickers);

        
    } catch (error) {
        return res.status(500).json({success:'false',message:'Error in Data fetching',error})
    }
}

const fetchTickers=async(req,res)=>{
    try{
        const tickers=await Ticker.find({}).limit(10);
        return res.status(200).json(tickers);

    }catch(error){
        return res.status(500).json({success:'false',message:'Error in  fetching',error})

    }
}
module.exports={
    storeTickers,
    fetchTickers
}

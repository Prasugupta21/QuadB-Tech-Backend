const {Schema,model}=require('mongoose');

const tickerSchema=new Schema({
    name:{type:String},
    volume:{type:Number},
    sell:{type:Number},
    buy:{type:Number},
    baseUnit:{type:String},
    last:{type:Number},
});

const  Ticker=model('ticker',tickerSchema);
module.exports=Ticker;


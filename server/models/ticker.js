const {Schema,model}=require('mongoose');

const tickerSchema=new Schema({
    name:{type:String},
    volume:{type:Number},
    sellingPrice:{type:Number},
    buyPrice:{type:Number},
    baseUnit:{type:String},
    lasnptPrice:{type:Number},
});

const  Ticker=model('ticker',tickerSchema);
module.exports=Ticker;



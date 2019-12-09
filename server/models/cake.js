const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/RateMyCakeDB', {useNewUrlParser: true});
const RatesSchema = new mongoose.Schema({
    stars:{type:String, required: [true,'Stars Required'], required:[mo]},
    comment:{type:String},},{timestamps:true}
);
const CakeSchema= new mongoose.Schema({
    baker :{type :String,required:[ true,"Baker Required"]},
    image:{type:String, required:[true, "Image URL Required"]},
    rates: [RatesSchema],},{timestamps:true}
);

const Cake = mongoose.model('Cake', CakeSchema);
module.exports = Cake;
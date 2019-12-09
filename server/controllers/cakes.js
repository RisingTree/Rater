const cake = require('../models/cake.js');
module.exports = {
    all: function(req,res){
        cake.find({}, function(err, data){
            res.json({message:'Success', data:data});
        })
    },
    add: function(req,res){
        cake.create(req.body);
        res.json({data:'Success'});
    },
    addrate: function (req,res){
        console.log(req.body)
        let newRate = {stars : req.body.stars, comment: req.body.comment}
        cake.updateOne({_id:req.body._id}, {$push: {rates: newRate}}, function(err, data) {
            if (err){
                res.json({data:err});
            }
            else{
                res.json({data:data});
            }
        });
    },
    getId: function(req, res){
        cake.find({_id:req.params.id}, function(err, data){
            if (err){
                res.json({data:err});
            }
            else{
                res.json({data:data});
            }
        });
    }
}
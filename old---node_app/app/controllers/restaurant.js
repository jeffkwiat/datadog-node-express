var Yelp = require('node-yelp-fusion');
var Confyelp = require('./config/yelp');
var yelp = new Yelp({ id:Confyelp.key , secret:Confyelp.secret });


exports.pull = function(req, res, next)
{
    yelp.reviews("biryani-cart-new-york")
    .then(function(result){
           res.json(result);
        });

}

const cakes = require('../controllers/cakes.js');
module.exports = function(app){
    app.get('/allCakes', cakes.all);
    app.post('/newCake', cakes.add);
    app.put('/updateCake', cakes.addrate);
    app.get('/cakes/:id', cakes.getId);
}
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({useNewUrlParser:true}));
app.use(express.static( __dirname + '/public/dist/public' ));
require('./server/configs/routes.js')(app);
app.listen(8000, () => console.log("listening on port 8000"));



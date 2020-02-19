const express = require("express");
const app = express();
const port = 3000;
const router = require('./router/index');

app.set("view engine", "ejs");
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended : true }));

app.use(express.static(__dirname + '/public'));
app.use(router);

app.listen(port, () => {
    console.log(`This app running on port : `, port);
})
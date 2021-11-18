const express = require('express')
const app = express();


const morgan = require('morgan')
const html = require('./views/layout');
//const layout = require('./views/layout');

app.use(express.static('public'))
//app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({extended: false}))
app.get('/', (req,res) =>{
    console.log(html)
    res.send(html(""))
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });


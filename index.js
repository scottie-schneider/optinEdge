const express = require('express');
const app = express();
const axios = require('axios');
const jsonParser = require('body-parser');
const PORT = process.env.PORT || 5000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var path = require('path');
app.use(express.static(path.join(__dirname)));
app.use("/styles", express.static(__dirname + '/styles'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/scripts", express.static(__dirname + '/scripts'));

const routes = require('./routes');




app.use(jsonParser());

app.use('/form', routes);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})

//https://git.heroku.com/frozen-dawn-92571.git

/*
let email = "2e00f211473c1a6c828a9ec22ba5950b-0";
let fullname = "2e00f211473c1a6c828a9ec22ba5950b-1";

document.getElementById(email).addEventListener("change", change);

function change () {
  ijQuery.ajax({
    url: 'https://frozen-dawn-92571.herokuapp.com/form',
    dataType: 'json',
    type: 'post',
    contentType: 'application/json',
    data:
      {
        //"email": "scott.schneider09@yahoo.com"
        "email": document.getElementById(email).value,
        "formId": "1234"
      },
    processData: false,
    success: function( data, textStatus, jQxhr ){
      console.log(data)
        $('#response pre').html( JSON.stringify( data ) );
        document.getElementById(fullname).value = data.fullName;
    },
    error: function( jqXhr, textStatus, errorThrown ){
        console.log( errorThrown );
    }
})
}
*/

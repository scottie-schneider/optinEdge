let email = "2e00f211473c1a6c828a9ec22ba5950b-0";
let fullname = "2e00f211473c1a6c828a9ec22ba5950b-1";
var cheerio = require('cheerio');

//document.getElementById(email).addEventListener("change", change);

function change () {
  $.ajax({
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
        document.getElementById(fullname).value = data.fullName;
    },
    error: function( jqXhr, textStatus, errorThrown ){
        console.log( errorThrown );
    }
  })
}

function now () {
  cheerio.ajax({
    url: 'https://frozen-dawn-92571.herokuapp.com/form',
    dataType: 'json',
    type: 'post',
    contentType: 'application/json',
    data:
      {
        //"email": "scott.schneider09@yahoo.com"
        "email": "scott@warcat.co",
        "formId": "1234"
      },
    processData: false,
    success: function( data, textStatus, jQxhr ){
      console.log(data)
        document.getElementById(fullname).value = data.fullName;
    },
    error: function( jqXhr, textStatus, errorThrown ){
        console.log( errorThrown );
    }
  })
}
now();

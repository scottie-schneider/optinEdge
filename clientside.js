let email = "101bb5a15e6fe70fcdea757aaad27d38-0";
let fullname = "101bb5a15e6fe70fcdea757aaad27d38-";
let firstname = "101bb5a15e6fe70fcdea757aaad27d38-2";
let lastname = "101bb5a15e6fe70fcdea757aaad27d38-3";
let phone = "101bb5a15e6fe70fcdea757aaad27d38-4";
let location1 = "101bb5a15e6fe70fcdea757aaad27d38-5";
let title = "101bb5a15e6fe70fcdea757aaad27d38-6";
let twitter = "101bb5a15e6fe70fcdea757aaad27d38-7";
let linkedin = "101bb5a15e6fe70fcdea757aaad27d38-8";



document.getElementById(email).addEventListener("change", change);
if(!document.getElementById(email)){
  console.error('WARNING: your email field ID is incorrect');
}else{
  function change () {
    $.ajax({
      url: 'https://frozen-dawn-92571.herokuapp.com/form',
      type: 'POST',
      crossDomain: true,
      data: {
          "email": document.getElementById(email).value,
          "formId": "1234"
        },
      success: function( data, textStatus, jQxhr ){
        console.log(data)
          if(data.fullName && document.getElementById(fullname)){
        		document.getElementById(fullname).value = data.fullName;
          }
          if(!document.getElementById(fullname)){
            console.log('your fullname field is messed up')
          }
        	if(data.details.name.given != 'undefined' && data.details.name.given != null){
        		document.getElementById(firstname).value = data.details.name.given;
          }
          if(data.details.name.family != 'undefined' && data.details.name.family != null){
        		document.getElementById(lastname).value = data.details.name.family;
          }
          if(data.details.phones[0]){
        		document.getElementById(phone).value = data.details.phones[0];
          }
          if(data.location){
        		document.getElementById(location1).value = data.location;
          }
        	if(data.title){
        		document.getElementById(title).value = data.title;
          }
        	if(data.twitter){
        		document.getElementById(twitter).value = data.twitter;
          }
        	if(data.linkedin){
        		document.getElementById(linkedin).value = data.linkedin;
          }
      },
      error: function( jqXhr, textStatus, errorThrown ){
          console.log('hello error')
          console.log( errorThrown );
      }
    })
  }
}

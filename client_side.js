let email = "e2cb1c262563bff37e1994d144478ad3-0";
let fullname = "e2cb1c262563bff37e1994d144478ad3-1";


document.getElementById(email).addEventListener("change", change);

function change () {
  $.ajax({
    url: 'https://frozen-dawn-92571.herokuapp.com/form',
    dataType: 'json',
    type: 'post',
    contentType: 'application/json',
    data:
      {
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

//Name - B.B.Chathurangi
//SID  -  IT17182492

//User Validation Process
//Hard-Code Values Used for Demonstration Purposes.
function UserValidation() {
  var name = document.forms["loginForm"]["user_name"].value;
  var password = document.forms["loginForm"]["p_word"].value;

  if (name != "admin"  || password != "admin123"){
    alert("Incorrect username or password");
    return false;
  }
}

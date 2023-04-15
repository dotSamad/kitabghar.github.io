function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username == "") {
        alert("Please enter your username.");
        return false;
    }
    else if (password == "") {
        alert("Please enter your password.");
        return false;
    }
    else {
        alert("Welcome " + username + "!");
        return true;
    }
}

// signup
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
  
    if (username == "") {
        alert("Please enter your username.");
        return false;
    }
    else if (password == "") {
        alert("Please enter your password.");
        return false;
    }
    else if (confirm_password == "") {
        alert("Please confirm your password.");
        return false;
    }
    else if (password != confirm_password) {
        alert("Passwords do not match.");
        return false;
    }
    else {
        alert("Congratulations " + username + ", your account has been created!");
        return true;
    }
}

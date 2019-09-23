function validateForm() {
            
    var username = document.getElementById('username').value;
    var email = document.getElementById('usermail').value;            
    

    var temp1 = validateUsername(username);
    var temp2 = validateEmail(email);

    if(temp1 == false) {

        document.getElementById('user').innerHTML = 'Invalid username!!';                 
        document.getElementById('user').style.color = 'red';
    }

    if(temp2 == false) {

        document.getElementById('em').innerHTML = 'Invalid email!!';                 
        document.getElementById('em').style.color = 'red';
    }

    if(temp1 && temp2) {

        alert("Login Successful!!");
        document.getElementById('user').innerHTML = '';
        document.getElementById('em').innerHTML = '';
        return;
    }

    alert("Error logging in!!");
}

function validateUsername(username) {
    
    let userName = String(username);
    if(userName.length <= 3) {
        return false;
    }

    if(userName.charAt(0)>='0' && userName.charAt(0)<='9') {
        return false;
    }

    return true;
}

function validateEmail(email) {

    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(String(email));
}



const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

// add event listner
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})

function setErrorMsg (input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error"; // add class error
    small.innerText = errormsgs; // display error message
}

function setSuccessMsg (input ) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"; // add class success
}

const sendData = (usernameVal, sRate, count) => {
    if (sRate === count) {
        // alert ('Successful Registration');
        swal("Welcome " + usernameVal, "Your registration is successful");
        // swal(`Welcome  ${usernameVal} \n Your registration is successful`);
        // location.href = `test.html?username=${username}`
    }
}

// final data validation
const successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1;
    for(var i = 0; i < formCon.length; i++) {
        if(formCon[i].className === "form-control success"){
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, count);
        } else {
            return false;
        }
    }
}



    //multiple email validation
    const isEmail = (emailVal) => {
        var atSymbol = emailVal.indexOf('@');
        if(atSymbol < 1 ) return false;
        var dot = emailVal.lastIndexOf('.');
        if(dot <= atSymbol + 2) return false;
        if(dot === emailVal.length - 1) return false;
        if(emailVal.length < 3) return false;
        return true;
    }

// define the validat function
const validate = () => {
    // remove the spaces in beggining of fields
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();


            // validate username
    if(usernameVal === "") {
        setErrorMsg(username, 'Username cannot be blank');
    } else if (usernameVal.length <=2) {
        setErrorMsg(username, 'Username to be minimum 3 character');
    } else {
        setSuccessMsg(username);
    }

            // validate email
    if(emailVal === "") {
        setErrorMsg(email, 'Email cannot be blank');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'Not a valid email');
    } else {
        setSuccessMsg(email);
    }

            // validate phone
    if(phoneVal === "") {
        setErrorMsg(phone, 'Phone cannot be blank');
    } else if (phoneVal.length > 10 || phoneVal.length < 10) {
        setErrorMsg(phone, 'Phone to be 10 digits');
    } else {
        setSuccessMsg(phone);
    }

            // validate password
    if(passwordVal === "") {
        setErrorMsg(password, 'Password cannot be blank');
    } else if (passwordVal.length < 5) {
        setErrorMsg(password, 'Password to be minimum 5 characters');
    } else {
        setSuccessMsg(password);
    }

            // validate password
    if(cpasswordVal === "") {
        setErrorMsg(cpassword, 'Confirm Password cannot be blank');
    } else if (cpasswordVal != passwordVal) {
        setErrorMsg(cpassword, 'Password not matched');
    } else {
        setSuccessMsg(cpassword);
    }

    successMsg(usernameVal);

}


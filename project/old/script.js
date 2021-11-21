function validateForm(){
    var firstname = document.getElementById("firstname").value;
    var error = document.getElementById("error-firstname");
    error.innerHTML = "";
    if (firstname == "") {
        
        error.innerHTML = "Please enter your firstname";
       
    } else if (/\W/.test(firstname) === true) {
       
        error.innerHTML = "No special charatcers are allowed";
    } else if (/\d/.test(firstname) === true) {
        
        error.innerHTML = "Digits are not allowed";
    } else {
        error.innerHTML = "✔";
    }

    var lastname = document.getElementById("lastname").value;
    var error = document.getElementById("error-lastname");
    error.innerHTML = "";
    if (lastname == "") {
        
        error.innerHTML = "Please enter your lastname";
    } else if (/\W/.test(lastname) === true) {
       
        error.innerHTML = "No special charatcers are allowed";
    } else if (/\d/.test(lastname) === true) {
        
        error.innerHTML = "Digits are not allowed";
    } else {
        error.innerHTML = "✔";
    }

      var email = document.getElementById("email").value;
      var error = document.getElementById("errorEmail");
      var regex = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      error.innerHTML = "";
     if (email == "") {
     
       error.innerHTML = "Email cannot be blank";
   	} else if (regex.test(email) === false) {
       
       error.innerHTML = "Email is invalid";
 	} else{
       error.innerHTML = "✔";
     }
 
          var mno = document.getElementById("mno").value;
          var error = document.getElementById("error-mno");
          var regex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
          error.innerHTML = "";
         if (mno == "") {
         
           error.innerHTML = "Mobile Number cannot be blank";
           } else if (regex.test(mno) === false) {
           
           error.innerHTML = "Invalid Number";
         } else{
           error.innerHTML = "✔";
         }
        }

  
    


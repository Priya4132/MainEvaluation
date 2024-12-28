let form=document.getElementById("form");
form.addEventListener("submit", function(){
    event.preventDefault();
    let email=form.email.value;
    let password=form.password.value;
    let loginData={email,password}

    if(email=="admin@empher.com" && password=="empher@123"){//checking for admin credentials
        alert( "Logged in as Admin.");
        localStorage.setItem("loginData" , JSON.stringify(loginData));
        window.location.href="admin.html"
    }
    else if(email=="user@empher.com" && password=="user@123"){//checking for user credentials
        alert( "Redirecting to Book Page.");
        localStorage.setItem("loginData" , JSON.stringify(loginData));
        window.location.href="books.html"
    }
    else{
        alert("Wrong Credentials , please login with correct credentials")
    }
    
})
// let loginObj=JSON.parse(localStorage.getItem("LoginData"));

// console.log(loginObj)
// localStorage.setItem("loginData" , JSON.stringify(loginObj));
let form=document.getElementById("form");
form.addEventListener("submit", function(){
    event.preventDefault();
    let email=form.email.value;
    let password=form.password.value;
    let loginObj={email,password}
    let loginObj1={email,password}
    // let user=[loginObj];
    // localStorage.setItem("loginData" , JSON.stringify(loginObj));

    if(email=="admin@empher.com" && password=="empher@123"){//checking for admin credentials
        alert( "Logged in as Admin.");
        localStorage.setItem("loginData" , JSON.stringify(loginObj));
        window.location.href="admin.html"
    }
    else if(email=="user@empher.com" && password=="user@123"){//checking for user credentials
        alert( "Redirecting to Book Page.");
        let loginObj1={email,password}
        localStorage.setItem("loginData" , JSON.stringify(loginObj1[0]));
        window.location.href="books.html"
    }
    else{
        alert("Wrong Credentials , please login with correct credentials")
    }
    localStorage.setItem("loginData" , JSON.stringify(loginObj));
})

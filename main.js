function login(){
    if(uname.value && pswd.value){
        localStorage.setItem("username", uname.value)
        localStorage.setItem("password", pswd.value)
        alert("Login Successfull..!")
        //redirect to homepage
        window.location = "home.html"
    }else{
        alert("Please fill the form..!")
    }
}

function logout(){
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    //redirect to loginpage
    window.location="login.html"
}
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

let sighup = ()=>{
    alert("signup");
    let email = prompt("enter your email: ")
    let pass = prompt("enter your password: ")
    
    
}

let add = document.querySelector(".add").addEventListener("click", (e)=>{
    sighup();
   
    head.style.display = "initial"
    document.querySelector(".add").style.display = "none"
})
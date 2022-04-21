function changeToSignUp() {
    document.querySelector(".js-name").style.display = "inherit"
    document.querySelector(".js-confirm").style.display = "inherit"
    document.querySelector(".forgot-password").style.display = "none"
    document.querySelector(".sign-in-text").textContent = "Sign Up"
    document.querySelector(".sign-btn").value = "Sign up now"
    document.querySelector(".sign-link-text").textContent = "Already have an account?"
    document.querySelector(".sign-link").textContent = "Sign In"
    document.querySelector("title").textContent = "Sign-up"
    document.querySelector(".right-container").style.backgroundColor = "white"
 }
 
 const linkSignUp = document.querySelector(".sign-link")
 linkSignUp.addEventListener('click', changeToSignUp)
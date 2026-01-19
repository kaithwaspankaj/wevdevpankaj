const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
  });

  // menu close on link click
  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navbar.classList.remove("active");
    });
  });

  const signInBtn = document.querySelector(".signin-btn");
  const signUpBtn = document.querySelector(".signup-btn");

  signInBtn.addEventListener("click", () => {
    alert("Sign In form coming soon 🚀");
  });

  signUpBtn.addEventListener("click", () => {
    alert("Sign Up form coming soon 🚀");
  });

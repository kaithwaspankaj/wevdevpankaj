let toggle=document.getElementById("toggle");
let navbar=document.getElementById("navbar");
toggle.addEventListener("click",function(){
    navbar.classList.toggle("active")
});

  const form = document.getElementById("contactform");
  const response = document.getElementById("response");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // page reload roko

    // inputs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const message = document.getElementById("massage").value.trim();

    // basic validation
    if (name === "" || email === "" || number === "" || message === "") {
      showMessage("❌ Please fill all fields", "error");
      return;
    }

    // email check
    if (!email.includes("@") || !email.includes(".")) {
      showMessage("❌ Please enter a valid email", "error");
      return;
    }

    // mobile number check (India)
    if (number.length < 10) {
      showMessage("❌ Please enter a valid mobile number", "error");
      return;
    }

    // success
    showMessage("✅ Message sent successfully!", "success");

    // form reset
    form.reset();
  });

  function showMessage(msg, type) {
    response.innerText = msg;

    if (type === "success") {
      response.style.color = "green";
    } else {
      response.style.color = "red";
    }
  }


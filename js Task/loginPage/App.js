let form = document.getElementById("form");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = document.getElementById("userName").value;
  let password = document.getElementById("password").value;
  console.log(userName, password);
  if (userName == "" || password == "") {
    alert("please fill the details...");
  }
});

let show_pwd = document.getElementById("show_pwd");
let emoji = document.getElementById("emoji");
let password = document.getElementById("password");
show_pwd.addEventListener("click", (e) => {
  e.preventDefault();
  if ((password.value = !"")) {
    if (password == "password") {
      password.type = "text";
      emoji.type = "🙈";
      show_pwd.innerHTML = "Hide password";
    } else {
      password.type = "password";
      emoji.innerHTML = "🐵";
      show_pwd.innerHTML = "Show password";
    }
  } else {
    alert("Please fill the details");
  }
});
let userName = document.getElementById("userName");
let submit = document.getElementById("submit_btn");
userName.addEventListener("keyup", () => {
  let validation = userName.value.length < 6;
  if (validation == true) {
    userName.classList.add("warning");
    userName.classList.remove("success");
    submit.disabled = true;
    submit.classList.add("disable");
  } else {
    userName.classList.remove("warning");
    userName.classList.add("success");
    submit.disabled = false;
    submit.classList.remove("disable");
  }
});
password.addEventListener("keyup", () => {
  let validation = password.value.length < 6;
  if (validation == true) {
    password.classList.add("warning");
    password.classList.remove("success");
    submit.disabled = true;
    submit.classList.add("disable");
  } else {
    password.classList.remove("warning");
    password.classList.add("success");
    submit.disabled = false;
    submit.classList.remove("disable");
  }
});

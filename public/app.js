document.getElementById("sign-in").onclick = (e) => {
  e.preventDefault();
  fetch("http://127.0.0.1:5000/home");
};

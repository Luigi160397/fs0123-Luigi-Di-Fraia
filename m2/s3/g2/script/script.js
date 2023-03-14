document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value;
    if (name) {
      localStorage.setItem("name", name);
      document.getElementById("savedName").innerText = name;
    }
  });

  const removeButton = document.getElementById("removeButton");
  removeButton.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.removeItem("name");
    document.getElementById("nameInput").value = "";
    document.getElementById("savedName").innerText = "";
  });

  setInterval(updateCounter, 1000);
});

const updateCounter = () => {
  let counter = sessionStorage.getItem("counter");
  if (!counter) {
    counter = 0;
  }
  counter++;
  sessionStorage.setItem("counter", counter);
  document.getElementById("counter").innerText = counter;
};

window.onload = () => {
  const savedName = localStorage.getItem("name");
  if (savedName) {
    document.getElementById("savedName").innerText = savedName;
    document.getElementById("nameInput").value = savedName;
  }
};

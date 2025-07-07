const button = document.getElementById("messageButton");
const message = document.getElementById("message");

let isMessageVisible = false;

button.addEventListener("click", () => {
  if (isMessageVisible) {
    message.textContent = "";
  } else {
    message.textContent = "Seja bem vindo(a) ao meu portfólio! :)";
  }
  isMessageVisible = !isMessageVisible;
});

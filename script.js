document.addEventListener("DOMContentLoaded", function () {

  let input = document.getElementById("tarefa");
  let lista = document.getElementById("lista");

  // ENTER adiciona tarefa
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      adicionar();
    }
  });

  window.adicionar = function () {
    if (input.value.trim() === "") return;

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let texto = document.createElement("span");
    texto.textContent = input.value;

    checkbox.onchange = function () {
      if (checkbox.checked) {
        texto.style.textDecoration = "line-through";
        texto.style.opacity = "0.6";
        texto.style.color = "red";
      } else {
        texto.style.textDecoration = "none";
        texto.style.opacity = "1";
        texto.style.color = "white";
      }
    };

    li.appendChild(checkbox);
    li.appendChild(texto);

    lista.appendChild(li);
    input.value = "";
  };
window.limpar = function () {
  lista.innerHTML = "";
};

});
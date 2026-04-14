document.addEventListener("DOMContentLoaded", () => {

  const input = document.getElementById("tarefa");
  const lista = document.getElementById("lista");

  let periodoSelecionado = "";

  input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      e.preventDefault();
      adicionar();
    }
  });

  const selecionarBotao = (btn, periodo) => {
    periodoSelecionado = periodo;
    document.querySelectorAll(".periodos button")
      .forEach(b => b.classList.remove("ativo"));
    btn.classList.add("ativo");
  };

  window.manha = btn => selecionarBotao(btn, "manha");
  window.tarde = btn => selecionarBotao(btn, "tarde");
  window.noite = btn => selecionarBotao(btn, "noite");

  window.adicionar = () => {
    if (!input.value.trim()) return;

    const li = document.createElement("li");
    li.setAttribute("data-periodo", periodoSelecionado);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const texto = document.createElement("span");
    texto.textContent = input.value;

    checkbox.onchange = () => li.classList.toggle("checked");

    const tag = document.createElement("small");
    tag.textContent = periodoSelecionado;
    tag.style.marginLeft = "10px";
    tag.style.opacity = "0.6";

    li.append(checkbox, texto, tag);
    lista.appendChild(li);

    input.value = "";
  };

  window.limpar = () => lista.innerHTML = "";

  window.copiarLista = () => {
    const itens = document.querySelectorAll("#lista li");

    let textoFinal = "";

    itens.forEach((item, i) => {
      const texto = item.querySelector("span").textContent;
      const checked = item.querySelector("input").checked;

      textoFinal += `${i + 1}. ${checked ? `~${texto}~` : texto}\n`;
    });

    navigator.clipboard.writeText(textoFinal)
      .then(() => alert("Lista copiada!"))
      .catch(() => alert("Erro ao copiar."));
  };

});

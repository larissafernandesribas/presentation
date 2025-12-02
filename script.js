const botoes = document.querySelectorAll("nav button");
const secoes = document.querySelectorAll(".conteudo");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const id = botao.dataset.section;

        secoes.forEach(sec => sec.classList.remove("ativo"));
        document.getElementById(id).classList.add("ativo");
    });
});

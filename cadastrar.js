var area = document.getElementById("area");
// var nomeCadastro = "Giovanna Rocha";
var botao = document.getElementById("acessar");

var nomes = new Array(5);
nomes[0] = "Giovanna";
nomes[1] = "Ellen";
nomes[2] = "Mirian";
nomes[3] = "Luan";
nomes[4] = "Eric";

function entrar() {
    var nome = prompt("Digite seu nome");

    if (nome === nomes[0] || nome === nomes[1] || nome === nomes[2] || nome === nomes[3] || nome === nomes[4]) {
        area.innerHTML = "Bem-vindo " + nome + "!  <br>";
        botao.setAttribute("hidden", "true");
    }
    else {
        alert("Ops, algo deu errado!!!");
        area.innerHTML = "Clique no botão para acessar...<br>";
    }
    let botaoSair = document.createElement("button");
    botaoSair.innerText = "Sair da conta";
    botaoSair.onclick = sair;
    area.appendChild(botaoSair);

}

function sair() {
    alert("Até mais!");
    area.innerHTML = "Você saiu!";
    botao.removeAttribute("hidden");
}
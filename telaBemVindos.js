let area = document.getElementById('area');
let botao = document.getElementById("botao");
nomeCadastro = [];

function entrar() {
    let encontrou = false;
    let nome = prompt("Digite o seu nome");

    if (nome === '' || nome === null) {//inicio if 1
        alert("Ops, algo deu errado!!!");
        area.innerHTML = "Clique no botão para acessar";
    } else {// inicio else1
        for (let i = 0; i < nomeCadastro.length; i++) {//inicio do for
            if ((nomeCadastro[i] == nome)) {//inicio if 2
                area.innerHTML = "Bem vindo " + nome + "<br>";
                let botaoSair = document.createElement("button");
                botaoSair.innerText = "Sair da conta";
                botaoSair.onclick = sair;
                area.appendChild(botaoSair);
                botao.setAttribute("hidden", "true");
                encontrou = true;
                return;
            }// fim if 2
        }//fim do for

    }//fim else 1
    if (encontrou == false) {
        alert("Nome não cadastrado!");
    }

}//final da função entrar

function sair() {
    alert("Até mais!");
    area.innerHTML = "Você saiu"
    botao.removeAttribute("hidden", "false");
}

//função para cadastrar um novo usuario
function novoCadastro() {
    let novoUser = prompt("Informe um nome para o novo usuário");
    if (novoUser === '' || novoUser === null) {
        alert("Ops, algo deu errado!!!");
    }
    else{
        nomeCadastro.push(novoUser);
    }
}

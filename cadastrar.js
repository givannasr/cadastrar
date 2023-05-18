// var area = document.getElementById("area");
// // var nomeCadastro = "Giovanna Rocha";
// var botao = document.getElementById("acessar");

// var nomes = new Array(5);
// nomes[0] = "Giovanna";
// nomes[1] = "Ellen";
// nomes[2] = "Mirian";
// nomes[3] = "Luan";
// nomes[4] = "Eric";

// function entrar() {
//     var nome = prompt("Digite seu nome");

//     if (nome === nomes[0] || nome === nomes[1] || nome === nomes[2] || nome === nomes[3] || nome === nomes[4]) {
//         area.innerHTML = "Bem-vindo " + nome + "!  <br>";
//         botao.setAttribute("hidden", "true");
//     }
//     else {
//         alert("Ops, algo deu errado!!!");
//         area.innerHTML = "Clique no botão para acessar...<br>";
//     }
//     let botaoSair = document.createElement("button");
//     botaoSair.innerText = "Sair da conta";
//     botaoSair.onclick = sair;
//     area.appendChild(botaoSair);

// }

// function sair() {
//     alert("Até mais!");
//     area.innerHTML = "Você saiu!";
//     botao.removeAttribute("hidden");
// }


let area = document.getElementById('area');
let botao = document.getElementById("acessar");
nomeCadastro = ["Antonio César", "Giovanna", "Ellen", "Mirian", "Luan"];
function entrar() {
    let encontrou = false;
    let nome = prompt("Digite o seu nome");

    if (nome === '' || nome === null) {
        alert("Ops, algo deu errado!!!");
        area.innerHTML = "Clique no botão para acessar";
    } else {
        for (let i = 0; i <= 4; i++) {
            if (nomeCadastro[i] == nome) {
                area.innerHTML = "Bem vindo " + nome + "<br>";
                let botaoSair = document.createElement("button");
                botaoSair.innerText = "Sair da conta";
                botaoSair.onclick = sair;
                area.appendChild(botaoSair);
                botao.setAttribute("hidden", "true");
                encontrou = true;
            }
        }
     }if(encontrou===false){
            alert("Nome não cadatrado, favor realizar cadastro!")
        }
    }





//final da função entrar

function sair() {
    alert("Até mais!");
    area.innerHTML = "Você saiu"
    botao.removeAttribute("hidden", "false");
}
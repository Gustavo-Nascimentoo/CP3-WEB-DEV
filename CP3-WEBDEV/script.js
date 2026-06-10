let itens = [
"Valorant - R$ 50,00",
"Fortnite - R$ 200,00",
"Minecraft - R$ 100,00"
];

function renderizarLista(){

let lista = document.getElementById("listaItens");

lista.innerHTML = "";

for(let i = 0; i < itens.length; i++){

lista.innerHTML += `
<li>
${itens[i]}
<br><br>

<button onclick="editarItem(${i})">
Editar
</button>

<button onclick="removerItem(${i})">
Remover
</button>

</li>
`;
}

}

function fazerLogin(){

let usuario = document.getElementById("usuario").value;

let senha = document.getElementById("senha").value;

let erro = document.getElementById("erroLogin");

erro.textContent = "";

if(usuario === "" || senha === ""){

erro.textContent =
"Preencha todos os campos.";

return;

}

if(usuario === "aluno" && senha === "fiap2025"){

document.getElementById("loginTela")
.classList.add("escondido");

document.getElementById("crudTela")
.classList.remove("escondido");

}
else{

erro.textContent =
"Usuário ou senha incorretos.";

}

}

function adicionarFinal(){

let campo =
document.getElementById("novoItem");

let valor = campo.value;

let erro =
document.getElementById("erroItem");

erro.textContent = "";

if(valor === ""){

erro.textContent =
"O Item não pode estar vazio.";

return;

}

itens.push(valor);

campo.value = "";

renderizarLista();

}

function adicionarInicio(){

let campo =
document.getElementById("novoItem");

let valor = campo.value;

let erro =
document.getElementById("erroItem");

erro.textContent = "";

if(valor === ""){

erro.textContent =
"O Item não pode estar vazio.";

return;

}

itens.unshift(valor);

campo.value = "";

renderizarLista();

}

function editarItem(indice){

let novoValor =
prompt("Editar item:", itens[indice]);

if(
novoValor === null ||
novoValor === ""
){

return;

}

itens[indice] = novoValor;

renderizarLista();

}

function removerItem(indice){

itens.splice(indice,1);

renderizarLista();

}

renderizarLista();
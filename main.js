import { getLista, limpaLista, adicionaNaLista } from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");

function limpaEntrada() {
    pEntrada.textContent = "";
}

btnAdicionar.addEventListener("click", adicionarItemALista);
function adicionarItemALista() {
    adicionaNaLista(pEntrada.textContent);
    limpaEntrada();
    atualizarLista();
}


btnLimpar.addEventListener("click", limparItensDeLista);
function limparItensDeLista() {
    limpaLista();
    atualizarLista();
}

atualizarLista();
function atualizarLista() {
    olItens.innerHTML = "";
    let lista = getLista();
    for (let i = 0; i < lista.length; i++) {
        const li = document.createElement("li");
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}
const lista = ["Um", "Dois", "Três"];

export function getLista() {
    return structuredClone(lista);
}

export function limpaLista() {
    lista.splice(0);
}

export function adicionaNaLista(item) {
    lista.push(item);
}

export function removeDaLista(posicao) {
    lista.splice(posicao, 1);
}
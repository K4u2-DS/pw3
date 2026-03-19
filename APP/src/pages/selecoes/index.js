import { getSelecoes } from "../../services/selecoes.service.js";

const container = document.getElementById("selecoes-container");

const renderSelecoes = (selecoes) => {
    container.innerHTML = "";

    selecoes.forEach((selecao) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${selecao.logo}" />
            <h2>${selecao.nome}</h2>
            <p>Grupo: ${selecao.grupo}</p>
            <p>🏆 Títulos: ${selecao.conquistas.length}</p>
            <p>👥 Jogadores: ${selecao.jogadores.length}</p>
        `;

        container.appendChild(card);
    });
};

const load = async () => {
    try {
        const selecoes = await getSelecoes();
        console.log(selecoes);
        renderSelecoes(selecoes);
    } catch (error) {
        container.innerHTML = "<p>Erro ao carregar seleções</p>";
    }
};

load();
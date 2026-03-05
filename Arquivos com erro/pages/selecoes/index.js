import { getSelecoes } from "../../services/selecoes.service.js";

const container = document.getElementById("selecoes-container");

const criarCardSelecao = (selecao) => {
  const card = document.createElement("div");
  card.classList.add("selecao-card");

  card.innerHTML = `
        <img src="${selecao.logo}" alt="${selecao.nome}">
        <h3>${selecao.nome}</h3>
        <p>Grupo ${selecao.grupo}</p>
    `;

  return card;
};

const renderSelecoes = (selecoes) => {
  container.innerHTML = "";

  selecoes.forEach((selecao) => {
    const card = criarCardSelecao(selecao);
    container.appendChild(card);
  });
};

const initSelecoesPage = async () => {
  try {

    const selecoes = await getSelecoes();

    renderSelecoes(selecoes);

  } catch (error) {

    container.innerHTML = "<p>Erro ao carregar seleções</p>";
    console.error(error);

  }
};

export { initSelecoesPage };
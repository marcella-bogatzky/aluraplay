import { conectaApi } from "./conectaAPI.js";
const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault(); //Esse evento foi colocado porque a ação padrão da função de envio do formulário (formularo.AddEventListener) provoca o recarregamento da página. E queremos evitar esse recarregamento para não perder as informações preenchidas
    
    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    await conectaApi.criarVideo(titulo, descricao, url, imagem);

    window.location.href = "../pages/envio-concluido.html";
}

formulario.addEventListener("submit", evento => criarVideo(evento));
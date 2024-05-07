async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos"); //Fetch é um método assíncrono que tem como único parâmetro obrigatória a URL da API > retorna uma "promessa" (algo vai acontecer em alguma hora > pode se cumprir ou não). Quando não é colocado mais nenhum parâmetro além do obrigatório, é chamada de " Requisição GET" (solicitando para a API retornar dados, mas não vamos "fazer" nada com eles, queremos apenas recebê-los)
    const conexaoConvertida = await conexao.json() //Pega os dados recebidos em formato de bits e transforma em um formato json > em objetos
 
    return conexaoConvertida
}

async function criarVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST", // Para declarar um método diferente de GET para o Fetch, é necessário informar desta maneira
        headers: {
            'Content-type': "application/json" // O Content-type serve para específicar que tipo de arquivo está sendo enviado/recebido
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo");
    }
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;

}

async function buscaVideo(termoDeBusca){
    const conexao = await fetch (`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criarVideo,
    buscaVideo
}
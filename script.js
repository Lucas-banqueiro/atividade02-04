// Variáveis para os elementos
const editarBtn = document.getElementById('editarBtn');
const menuEdicao = document.getElementById('menuEdicao');
const mudarNomeBtn = document.getElementById('mudarNome');
const mudarCorBtn = document.getElementById('mudarCor');
const mudarDescricaoBtn = document.getElementById('mudarDescricao');
const nomeElemento = document.getElementById('nome');
const descricaoElemento = document.getElementById('descricao');
const fotoPerfil = document.getElementById('foto');

// Mostrar/Esconder o menu de edição
editarBtn.addEventListener('click', () => {
    menuEdicao.classList.toggle('hidden');
});

// Mudar nome
mudarNomeBtn.addEventListener('click', () => {
    const novoNome = prompt('Digite o novo nome:');
    if (novoNome) {
        nomeElemento.textContent = novoNome;
    }
});

// Mudar cor do perfil
mudarCorBtn.addEventListener('click', () => {
    const novaCor = prompt('Escolha uma cor para o perfil (ex: #ff6347, red, blue):');
    if (novaCor) {
        fotoPerfil.style.backgroundColor = novaCor;
    }
});

// Mudar descrição
mudarDescricaoBtn.addEventListener('click', () => {
    const novaDescricao = prompt('Digite a nova descrição:');
    if (novaDescricao) {
        descricaoElemento.textContent = novaDescricao;
    }
});
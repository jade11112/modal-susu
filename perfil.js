// Carregar dados do localStorage
window.onload = function () {
    const perfilNome = document.getElementById('perfilNome');
    const perfilEmail = document.getElementById('perfilEmail');
    const perfilTelefone = document.getElementById('perfilTelefone');
    const perfilCpf = document.getElementById('perfilCpf');
    const perfilSenha = document.getElementById('perfilSenha');

    // Obter dados do localStorage
    perfilNome.textContent = localStorage.getItem('nome') || 'Não informado';
    perfilEmail.textContent = localStorage.getItem('email') || 'Não informado';
    perfilTelefone.textContent = localStorage.getItem('telefone') || 'Não informado';
    perfilCpf.textContent = localStorage.getItem('cpf') || 'Não informado';
    perfilSenha.textContent = localStorage.getItem('senha') || 'Não informado';
};

// Botão para voltar à página inicial
document.getElementById('voltarBtn').onclick = function () {
    window.location.href = 'index.html'; // Ajuste conforme o nome do arquivo da página inicial
};

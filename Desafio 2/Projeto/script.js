document.getElementById('inscricaoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validação da idade
    const dataNascimento = new Date(document.getElementById('dataNascimento').value);
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }

    if (idade < 16) {
        alert('Você deve ter mais de 16 anos para se inscrever.');
        return;
    }

    // Validação do estado
    const estado = document.getElementById('estado').value;
    if (estado !== 'MA') {
        alert('Apenas residentes do Maranhão podem se inscrever.');
        return;
    }

    // Validação da trilha selecionada
    const trilhaSelecionada = document.querySelector('input[name="trilha"]:checked');
    if (!trilhaSelecionada) {
        alert('Por favor, selecione uma trilha de aprendizagem.');
        return;
    }

    // Validação do CPF
    const cpf = document.getElementById('cpf').value.replace(/\D/g, '');
    if (cpf.length !== 11) {
        alert('O CPF deve ter exatamente 11 dígitos.');
        return;
    }

    // Validação do CEP
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    if (cep.length !== 8) {
        alert('O CEP deve ter exatamente 8 dígitos.');
        return;
    }

    // Validação do telefone
    const telefone = document.getElementById('telefone').value.replace(/\D/g, '');
    if (telefone.length !== 11) {
        alert('O telefone deve ter exatamente 11 dígitos.');
        return;
    }

    // Validação do e-mail
    const email = document.getElementById('email').value;
    const confirmarEmail = document.getElementById('confirmarEmail').value;
    if (email !== confirmarEmail) {
        alert('Os e-mails não coincidem.');
        return;
    }

    // Se todas as validações passarem, redirecione para a página de sucesso
    window.location.href = 'success.html';
});

// Botão de cancelar
document.getElementById('cancelar').addEventListener('click', function() {
    document.getElementById('inscricaoForm').reset();
});

// Formatação automática do CPF
document.getElementById('cpf').addEventListener('input', function(event) {
    let cpf = event.target.value.replace(/\D/g, '');
    const erroCpf = document.getElementById('erroCpf'); // Elemento de erro para CPF

    if (cpf.length !== 11) {
        erroCpf.textContent = 'O CPF deve ter exatamente 11 dígitos.';
        erroCpf.style.display = 'block'; // Exibe a mensagem de erro
    } else {
        erroCpf.textContent = ''; // Limpa a mensagem de erro
        erroCpf.style.display = 'none'; // Oculta a mensagem de erro
    }

    // Formatação automática do CPF
    if (cpf.length > 11) {
        cpf = cpf.substring(0, 11);
    }
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    event.target.value = cpf;
});

// Formatação automática do CEP
document.getElementById('cep').addEventListener('input', function(event) {
    let cep = event.target.value.replace(/\D/g, '');
    const erroCep = document.getElementById('erroCep'); // Elemento de erro para CEP

    if (cep.length !== 8) {
        erroCep.textContent = 'O CEP deve ter exatamente 8 dígitos.';
        erroCep.style.display = 'block'; // Exibe a mensagem de erro
    } else {
        erroCep.textContent = ''; // Limpa a mensagem de erro
        erroCep.style.display = 'none'; // Oculta a mensagem de erro
    }

    // Formatação automática do CEP
    if (cep.length > 8) {
        cep = cep.substring(0, 8);
    }
    cep = cep.replace(/(\d{5})(\d)/, '$1-$2');
    event.target.value = cep;
});

// Formatação automática do telefone
document.getElementById('telefone').addEventListener('input', function(event) {
    let telefone = event.target.value.replace(/\D/g, '');
    const erroTelefone = document.getElementById('erroTelefone'); // Elemento de erro para telefone

    // Limita o telefone a 11 dígitos
    if (telefone.length > 11) {
        telefone = telefone.substring(0, 11);
    }

    // Validação do número de dígitos
    if (telefone.length < 11) {
        erroTelefone.textContent = 'O telefone deve ter exatamente 11 dígitos.';
        erroTelefone.style.display = 'block'; // Exibe a mensagem de erro
    } else {
        erroTelefone.textContent = ''; // Limpa a mensagem de erro
        erroTelefone.style.display = 'none'; // Oculta a mensagem de erro
    }

    // Formatação automática do telefone
    let telefoneFormatado = telefone;
    telefoneFormatado = telefoneFormatado.replace(/^(\d{2})(\d)/, '($1) $2');
    telefoneFormatado = telefoneFormatado.replace(/(\d{5})(\d)/, '$1-$2');
    event.target.value = telefoneFormatado;
});

// Validação da data de nascimento
document.getElementById('dataNascimento').addEventListener('change', function(event) {
    const dataNascimento = event.target.value;
    const ano = dataNascimento.split('-')[0]; // Extrai o ano (formato YYYY-MM-DD)
    const anoAtual = new Date().getFullYear(); // Obtém o ano atual
    const erroDataNascimento = document.getElementById('erroDataNascimento'); // Elemento de erro

    // Verifica se o ano tem exatamente 4 dígitos e está dentro do intervalo válido
    if (ano.length !== 4 || ano < 1900 || ano > anoAtual) {
        erroDataNascimento.textContent = 'Por favor, insira uma data de nascimento válida (ano entre 1900 e ' + anoAtual + ').';
        erroDataNascimento.style.display = 'block'; // Exibe a mensagem de erro
    } else {
        erroDataNascimento.textContent = ''; // Limpa a mensagem de erro
        erroDataNascimento.style.display = 'none'; // Oculta a mensagem de erro
    }
});
/* ___________________________Validação do Formulário____________________________________________________________________*/

document.getElementById('inscricaoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dataNascimento = new Date(document.getElementById('dataNascimento').value);
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }
    
    // Verifica se a idade é válida
    if (idade < 0 || idade > 100) {
        alert('Por favor, insira uma data de nascimento válida.');
        return;
    }
    
    if (idade < 16) {
        alert('Você deve ter mais de 16 anos para se inscrever.');
        return;
    }

    const estado = document.getElementById('estado').value;
    if (estado !== 'MA') {
        alert('Apenas residentes do Maranhão podem se inscrever.');
        return;
    }

    const trilhaSelecionada = document.querySelector('input[name="trilha"]:checked');
    if (!trilhaSelecionada) {
        alert('Por favor, selecione uma trilha de aprendizagem.');
        return;
    }

    const cpf = document.getElementById('cpf').value.replace(/\D/g, '');
    if (cpf.length !== 11) {
        alert('O CPF deve ter exatamente 11 dígitos.');
        return;
    }

    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    if (cep.length !== 8) {
        alert('O CEP deve ter exatamente 8 dígitos.');
        return;
    }

    const telefone = document.getElementById('telefone').value.replace(/\D/g, '');
    if (telefone.length !== 11) {
        alert('O telefone deve ter exatamente 11 dígitos.');
        return;
    }

    window.location.href = 'success.html';
});

/* ___________________________Botão de Cancelar______________________________________________________________________________________*/

document.getElementById('cancelar').addEventListener('click', function() {
    document.getElementById('inscricaoForm').reset();
});

/* ___________________________Formatação Automática do CPF____________________________________________________________________*/

document.getElementById('cpf').addEventListener('input', function(event) {
    let cpf = event.target.value.replace(/\D/g, '');
    const erroCpf = document.getElementById('erroCpf');

    if (cpf.length !== 11) {
        erroCpf.textContent = 'O CPF deve ter exatamente 11 dígitos.';
        erroCpf.style.display = 'block';
    } else {
        erroCpf.textContent = '';
        erroCpf.style.display = 'none';
    }

    if (cpf.length > 11) {
        cpf = cpf.substring(0, 11);
    }
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    event.target.value = cpf;
});

/* ___________________________Formatação Automática do CEP____________________________________________________________________*/

document.getElementById('cep').addEventListener('input', function(event) {
    let cep = event.target.value.replace(/\D/g, '');
    const erroCep = document.getElementById('erroCep');

    if (cep.length !== 8) {
        erroCep.textContent = 'O CEP deve ter exatamente 8 dígitos.';
        erroCep.style.display = 'block';
    } else {
        erroCep.textContent = '';
        erroCep.style.display = 'none';
    }

    if (cep.length > 8) {
        cep = cep.substring(0, 8);
    }
    cep = cep.replace(/(\d{5})(\d)/, '$1-$2');
    event.target.value = cep;
});

/*___________________________Validação do Campo Número do Endereço____________________________________________________________________*/
document.getElementById('numero').addEventListener('input', function(event) {
    const numeroInput = event.target;
    const valorAtual = numeroInput.value;
    const erroNumero = document.getElementById('erroNumero');

    // Remove qualquer caractere que não seja número
    const valorApenasNumeros = valorAtual.replace(/\D/g, '');

    // Atualiza o valor do campo com apenas números
    numeroInput.value = valorApenasNumeros;

    // Exibe uma mensagem de erro se o valor contiver caracteres não numéricos
    if (valorAtual !== valorApenasNumeros) {
        erroNumero.textContent = 'Apenas números são permitidos.';
        erroNumero.style.display = 'block';
    } else {
        erroNumero.textContent = '';
        erroNumero.style.display = 'none';
    }
});

/* ___________________________Formatação Automática do Telefone____________________________________________________________________*/

document.getElementById('telefone').addEventListener('input', function(event) {
    let telefone = event.target.value.replace(/\D/g, '');
    const erroTelefone = document.getElementById('erroTelefone');

    if (telefone.length > 11) {
        telefone = telefone.substring(0, 11);
    }

    if (telefone.length < 11) {
        erroTelefone.textContent = 'O telefone deve ter exatamente 11 dígitos.';
        erroTelefone.style.display = 'block';
    } else {
        erroTelefone.textContent = '';
        erroTelefone.style.display = 'none';
    }

    let telefoneFormatado = telefone;
    telefoneFormatado = telefoneFormatado.replace(/^(\d{2})(\d)/, '($1) $2');
    telefoneFormatado = telefoneFormatado.replace(/(\d{5})(\d)/, '$1-$2');
    event.target.value = telefoneFormatado;
});

/* ___________________________Validação da Data de Nascimento____________________________________________________________________*/

document.getElementById('dataNascimento').addEventListener('change', function(event) {
    const dataNascimento = event.target.value;
    const ano = dataNascimento.split('-')[0];
    const anoAtual = new Date().getFullYear();
    const erroDataNascimento = document.getElementById('erroDataNascimento');

    if (ano.length !== 4 || ano < 1900 || ano > 2025) {
        erroDataNascimento.textContent = 'Por favor, insira uma data de nascimento válida.';
        erroDataNascimento.style.display = 'block';
    } else {
        erroDataNascimento.textContent = '';
        erroDataNascimento.style.display = 'none';
    }
});
/* ___________________________Adicionar Borda ao Campo Preenchido____________________________________________________________________*/
function adicionarBordaPreenchido(input) {
    if (input.value.trim() !== "") {
        input.classList.add('campo-preenchido');
    } else {
        input.classList.remove('campo-preenchido');
    }
}

// Aplicar a todos os campos de texto, data, CPF, telefone, etc.
document.querySelectorAll('input[type="text"], input[type="date"], input[type="email"], input[type="tel"], select').forEach(input => {
    input.addEventListener('input', function() {
        adicionarBordaPreenchido(this);
    });

    // Verificar ao carregar a página se o campo já está preenchido
    adicionarBordaPreenchido(input);
});

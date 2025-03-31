/* ___________________________Validação do Formulário______________________________________________________________________*/

document.getElementById('inscricaoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Verificação da trilha selecionada
    const trilhaSelecionada = document.querySelector('input[name="trilha"]:checked');
    if (!trilhaSelecionada) {
        showModal('Por favor, escolha uma trilha.');
        return; // Impede o envio do formulário
    }
    // Verificação da data de nascimento
    const dataNascimento = document.getElementById('dataNascimento').value;
    const ano = dataNascimento.split('-')[0];
    const anoAtual = new Date().getFullYear();

    if (ano.length !== 4 || ano < 1900 || ano > anoAtual) {
        showModal('Por favor, insira uma data de nascimento válida');
        return;
    }

    // Verificação da idade (16 anos ou mais)
    const hoje = new Date();
    const dataNasc = new Date(dataNascimento);
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mes = hoje.getMonth() - dataNasc.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
        idade--;
    }

    if (idade < 16) {
        showModal('Você deve ter mais de 16 anos para se inscrever.');
        return;
    }

    // Verificação do CPF
    const cpf = document.getElementById('cpf').value.replace(/\D/g, '');
    if (cpf.length !== 11) {
        showModal('O CPF deve ter exatamente 11 dígitos.');
        return;
    }

    // Verificação do telefone
    const telefone = document.getElementById('telefone').value.replace(/\D/g, '');
    if (telefone.length !== 11) {
        showModal('O telefone deve ter exatamente 11 dígitos.');
        return;
    }

    // Verificação do CEP
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    if (cep.length !== 8) {
        showModal('O CEP deve ter exatamente 8 dígitos.');
        return;
    }

    // Verificação do estado
    const estado = document.getElementById('estado').value;
    if (estado !== 'MA') {
        showModal('Apenas residentes do Maranhão podem se inscrever.');
        return;
    }

    // Se todas as validações passarem, o formulário pode ser enviado
    window.location.href = 'success.html';
});

/* ___________________________Botão de Cancelar____________________________________________________________________*/
document.getElementById('cancelar').addEventListener('click', function() {
    document.getElementById('inscricaoForm').reset();
});

/* ___________________________Botão de Voltar____________________________________________________________________*/
document.getElementById('voltar').addEventListener('click', function() {
    window.location.href = 'index.html';
});


/* ___________________________Formatação Automática do CPF______________________________________________________________________*/
document.getElementById('cpf').addEventListener('input', function(event) {
    let cpf = event.target.value.replace(/\D/g, '');
    const erroCpf = document.getElementById('erroCpf');

    if (cpf.length !== 11) {
        erroCpf.textContent = 'Insira um CPF válido.';
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

/* ___________________________Formatação Automática do CEP___________________________________________________________________*/
document.getElementById('cep').addEventListener('input', function(event) {
    let cep = event.target.value.replace(/\D/g, '');
    const erroCep = document.getElementById('erroCep');

    if (cep.length !== 8) {
        erroCep.textContent = 'Insira um CEP válido.';
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

/* ___________________________Validação do Campo Número do Endereço____________________________________________________________________*/
document.getElementById('numero').addEventListener('input', function(event) {
    const numeroInput = event.target;
    const valorAtual = numeroInput.value;
    const erroNumero = document.getElementById('erroNumero');

    const valorApenasNumeros = valorAtual.replace(/\D/g, '');

    numeroInput.value = valorApenasNumeros;

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
        erroTelefone.textContent = 'Insira um telefone válido.';
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

/* ___________________________Validação da Data de Nascimento__________________________________________________________________*/
document.getElementById('dataNascimento').addEventListener('change', function(event) {
    const dataNascimento = event.target.value;
    const ano = dataNascimento.split('-')[0];
    const anoAtual = new Date().getFullYear();
    const erroDataNascimento = document.getElementById('erroDataNascimento');

    if (ano.length !== 4 || ano < 1900 || ano > 2025) {
        erroDataNascimento.textContent = 'Por favor, insira uma data de nascimento válida.';
        erroDataNascimento.style.display = 'block';
        return;
    } else {
        erroDataNascimento.textContent = '';
        erroDataNascimento.style.display = 'none';
    }
});

/* ___________________________Adicionar Borda ao Campo Preenchido_______________________________________________________________________*/
function adicionarBordaPreenchido(input) {
    if (input.value.trim() !== "") {
        input.classList.add('campo-preenchido');
    } else {
        input.classList.remove('campo-preenchido');
    }
}

document.querySelectorAll('input[type="text"], input[type="date"], input[type="email"], input[type="tel"], select').forEach(input => {
    input.addEventListener('input', function() {
        adicionarBordaPreenchido(this);
    });

    adicionarBordaPreenchido(input);
});


/* ___________________________Modal____________________________________________________________________*/

function showModal(message) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');

    modalTitle.textContent = 'Opa! Calma aí...';
    modalMessage.textContent = message;

    modal.style.display = 'flex';

    document.getElementById('modal-ok').addEventListener('click', () => {
        modal.style.display = 'none';
    });
    document.getElementById('close-modal').addEventListener('click', () => {
        modal.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

/* ___________________________Botão modo escuro____________________________________________________________________*/

// Criação do botão dinamicamente
window.onload = function() {
    // Criando o botão
    const button = document.createElement('button');
    button.innerHTML = '🌙';
    button.id = 'openModalBtn';
    document.body.appendChild(button);
  
    // Estilos do botão (já definidos no CSS acima)

    // Verifica se o modo escuro está ativado nas preferências do usuário
    if (localStorage.getItem('darkMode') === 'ativado') {
        document.body.classList.add('dark-mode');
        button.innerHTML = '🌞';
    }

    // Alterna o modo escuro
    button.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Salva a preferência do usuário
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'ativado');
            button.innerHTML = '🌞';
        } else {
            localStorage.setItem('darkMode', 'desativado');
            button.innerHTML = '🌙';
        }
    });
};


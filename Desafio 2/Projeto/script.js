document.getElementById('inscricaoForm').addEventListener('submit', function(event) {
    event.preventDefault();

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

    window.location.href = 'success.html';
});

document.getElementById('cancelar').addEventListener('click', function() {
    document.getElementById('inscricaoForm').reset();
});

document.getElementById('cpf').addEventListener('input', function(event) {
    let cpf = event.target.value.replace(/\D/g, '');
    if (cpf.length > 11) {
        cpf = cpf.substring(0, 11);
    }
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    event.target.value = cpf;
});
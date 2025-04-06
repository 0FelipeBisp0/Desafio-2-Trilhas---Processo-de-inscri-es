Formulário de Inscrição - Programa SECTI + FAPEMA
1. O que é o projeto
✱ Este projeto consiste em um formulário de inscrição online para o Programa de Formação SECTI + FAPEMA, destinado a jovens a partir de 16 anos, residentes no Maranhão, que estão cursando ou já concluíram o ensino médio. O objetivo é coletar dados dos candidatos de maneira estruturada e organizada para o processo seletivo.

✱ O formulário foi desenvolvido para ser intuitivo e acessível, garantindo que todas as informações sejam coletadas de maneira padronizada, com validações em tempo real para evitar erros comuns no preenchimento dos dados.

2. Como rodar localmente
Pré-requisitos
Antes de rodar o projeto localmente, você precisa ter as seguintes ferramentas instaladas:

º Git

º Visual Studio Code ou qualquer editor de sua preferência

Passos para rodar o projeto:

Clone o repositório:
git clone https://github.com/seu-usuario/seu-repositorio.git


Acesse o diretório do projeto:
cd seu-repositorio


Abra o projeto no seu editor de código (por exemplo, VSCode):
code .


Abra o arquivo index.html em seu navegador para visualizar a tela de inscrição e login formulário.


↠ Rodando com o Vercel (opcional)
Caso queira testar o formulário de forma online, o projeto está hospedado no Vercel, onde você pode fazer deploy diretamente. Para isso, basta conectar seu repositório com o Vercel e ele irá gerenciar o deploy automaticamente.

3. Tecnologias Utilizadas
✱ HTML5: Estruturação do formulário e páginas.
✱ CSS3: Estilização do formulário e da interface com responsividade.
✱ JavaScript: Validação de dados e formatação de entradas (ex.: CPF, telefone, CEP).
✱ GitHub: Controle de versão e hospedagem do código.
✱ Vercel: Hospedagem do formulário e integração contínua.

4. Principais Funcionalidades
Validação de Dados
• Campos obrigatórios: O sistema valida se todos os campos necessários estão preenchidos corretamente.
• Formato de dados: Valida a formatação do CPF, telefone, e-mail e CEP, garantindo que as informações sejam fornecidas no formato correto.
• Restrições geográficas: Verifica se o candidato reside no Maranhão por meio do campo de endereço, bloqueando inscrições de fora do estado.

Interatividade
• Formatação automática: O número de telefone e o CPF são formatados automaticamente durante o preenchimento.
• Feedback em tempo real: Mensagens de erro são exibidas caso os dados inseridos estejam incorretos, como CPF ou telefone inválidos.

Envio e Confirmação
• Botão de envio: Após preencher todos os campos corretamente, o candidato pode submeter o formulário.
• Página de sucesso: Após a submissão, o candidato recebe uma confirmação de que a inscrição foi bem-sucedida.

Modal de Login
• O formulário contém uma opção de modal de login que pode ser ativada para integrar com outros serviços, como autenticação por e-mail.

Acessibilidade
• A interface é responsiva, garantindo boa experiência em dispositivos móveis.
• O design inclui um modo escuro, oferecendo conforto para diferentes preferências de visualização.

5. Fluxo de Inscrição
Acesso ao formulário: O candidato acessa a página do Programa de Formação SECTI + FAPEMA.

Preenchimento do formulário: O candidato preenche os campos obrigatórios, incluindo dados pessoais e de residência.

Validação dos dados: O sistema valida as informações inseridas e exibe mensagens de erro, caso necessário.

Revisão e envio: O candidato revisa suas informações e confirma o envio do formulário.

Página de sucesso: Após a submissão, o candidato recebe uma confirmação de que a inscrição foi bem-sucedida.

6. Possíveis Melhorias Futuras
✱ Backend para Persistência de Dados: Implementação de um sistema backend (usando tecnologias como MySQL e Node.js) para armazenar os dados enviados pelos candidatos.
✱ Integração de e-mail: Envio de uma confirmação de inscrição via e-mail para o candidato, com o uso de serviços como SMTP ou APIs de envio de e-mail.
✱ Autenticação de Usuários: Adicionar funcionalidades de login e autenticação, permitindo que os candidatos acompanhem o status da sua inscrição.

7. Considerações Finais
    ↠Este projeto oferece uma solução prática e eficiente para a coleta de dados de inscrições, com um design intuitivo e validações robustas que garantem a integridade dos dados.
    ↠ O formulário está preparado para ser facilmente utilizado em dispositivos móveis, oferecendo uma boa experiência ao usuário. Futuramente, a implementação de funcionalidades como um backend de persistência de dados e integração com e-mail pode aumentar ainda mais a eficiência do processo de inscrição.

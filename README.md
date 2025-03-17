Documentação do Formulário de Inscrição
do Programa de Formação SECTI +
FAPEMA
1. Objetivo do Projeto
O objetivo deste projeto é fornecer um formulário de inscrição estático para o Programa de
Formação SECTI + FAPEMA. O formulário permite que candidatos insiram seus dados de
forma organizada e estruturada, garantindo uma coleta eficiente das informações necessárias
para o processo seletivo.
2. Problema Resolvido
O projeto visa solucionar desafios comuns encontrados em processos de inscrição, como:
• Falta de padronização nos dados enviados pelos candidatos.
• Dificuldade na validação de informações inseridas manualmente.
• Necessidade de um ambiente simples e acessível para preenchimento dos dados.
3. Público-alvo e Perfil dos Usuários
O formulário é destinado a jovens a partir de 16 anos, residentes no Maranhão, que estejam
cursando ou tenham concluído o ensino médio e desejam se inscrever no Programa de
Formação SECTI + FAPEMA. Os candidatos possuem diferentes níveis de familiaridade
com tecnologia, tornando essencial um sistema intuitivo e de fácil uso.
4. Tecnologias Utilizadas
• HTML5 - Estrutura do formulário.
• CSS3 - Estilização e responsividade.
• JavaScript - Validação de dados e formatação de entrada.
• GitHub - Controle de versão e hospedagem do código.
• Vercel - Hospedagem do formulário e integração contínua.
5. Principais Funcionalidades
O formulário conta com os seguintes elementos:
• Campos de Entrada: Nome completo, e-mail, telefone, CPF, endereço e trilha de
interesse.
• Validação com JavaScript:
o Verificação de campos obrigatórios.
o Validação de formato correto para e-mail, CPF e CEP.
o Formatação automática do número de telefone.
o Restrição geográfica: O formulário não permite o envio de inscrições de
pessoas que não residem no Maranhão. Isso é validado por meio de um campo
obrigatório de endereço completo. Caso o usuário informe um endereço fora
do Maranhão, o formulário exibirá uma mensagem informando que a inscrição
está restrita aos residentes do estado.
• Feedback Visual: Destaca erros nos campos incorretos.
• Botão de Envio: Envia os dados preenchidos e exibe uma página de sucesso
mostrando que o formulário foi enviado
6. Fluxo de Inscrição
O processo de inscrição visa garantir que candidatos interessados possam se registrar para o
Programa de Formação SECTI + FAPEMA de maneira organizada e eficiente.
6.1. Etapas do Processo
6.1.1. Acesso ao Sistema
• O candidato acessa a página do Programa de Formação SECTI + FAPEMA.
• Um botão "Inscreva-se" leva ao formulário de inscrição.
6.1.2. Cadastro do Usuário
O candidato deve fornecer as seguintes informações:
• Informações Pessoais
o Nome completo
o Data de nascimento
o CPF
o E-mail
o Telefone de contato
o Foto do documento de identidade
• Informações Residenciais
o CEP
o Rua
o Número
o Cidade
o Estado
o Foto do comprovante de residência
O sistema:
• Valida automaticamente os campos obrigatórios (formato de CPF, Telefone e CEP).
• Exibe mensagens de erro caso os dados estejam incorretos.
6.1.3. Revisão e Confirmação
• O candidato deve revisar todas as informações antes de confirmar a inscrição.
• O sistema impede o envio caso haja campos obrigatórios não preenchidos ou
preenchidos de maneira incorreta.
7. Aprendizados e Desafios
Durante o desenvolvimento, enfrentamos desafios como:
• Criação de um layout responsivo, garantindo uma boa experiência em dispositivos
móveis.
• Implementação de validações eficientes para evitar erros no envio dos dados.
• Formatar corretamente informações como CPF, telefone etc., garantindo que os dados
estejam no padrão esperado.
Esses desafios foram superados por meio de pesquisa, aplicação de boas práticas de
desenvolvimento front-end e aprendizado com as aulas da Alura.
8. Possíveis Melhorias Futuras
• Implementação de Back-End:
Uma possível melhoria seria a implementação de um back-end para o
armazenamento dos dados enviados. Utilizando MySQL, a aplicação poderia
persistir as informações dos candidatos de maneira mais robusta. Linguagens
como C# ou Java poderiam ser empregadas para desenvolver uma API que
interaja com o banco de dados, proporcionando maior controle e segurança dos
dados.
• Envio de Confirmação por E-mail:
Outra possível melhoria seria implementar o envio de um e-mail de
confirmação após a inscrição, garantindo que o candidato receba um retorno
imediato sobre a sua inscrição. Essa funcionalidade poderia ser integrada com
um serviço de e-mail, como SMTP ou APIs especializadas.
9. Considerações Finais
Este projeto representa um passo importante na padronização e organização do processo de
inscrição para o Programa de Formação SECTI + FAPEMA. Com uma abordagem
centrada no usuário e utilizando boas práticas de desenvolvimento, conseguimos criar um
sistema funcional e acessível. No futuro, melhorias como a integração com um back-end e
automação de comunicação com os candidatos podem tornar o processo ainda mais eficiente.

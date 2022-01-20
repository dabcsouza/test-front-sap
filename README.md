# Teste Front-End usando RestAPI github
Este repositório foi criado com o objetivo de hospedar uma aplicação react que faz uso da RestAPI do github.

## Requisitos

1 - Usando o endpoint `GET - /api/users?since={number}` trazer todos os usuários cadastrados no github e exibir na tela seu **ID e Login**.

- **Dica:**

  - Não será possível trazer todos usuário em apenas uma requisição, então será necessário fazer a paginação para a fim de fazer requisições sucessívas para o endpoint.
  
2 - Ao clicar em um usuário a aplicação deverá ser redirecionada para outra tela onde é exibido os detalhes do usuário(Id, Login, URL do perfil e data de criação da conta.    


- **Dica:**

  - A requisição dos detalhes pode ser feita pelo endpoint `GET - /api/users/:username/details`.

3 - Na tela criada no requisito 2 também deve conter uma tabela com informações referentes aos repositórios do usuário (id, Nome e  URL do repositório)

- **Dica:**

  - A requisição dos repositório públicos de um usuário pode ser feita pelo endpoint `GET - /api/users/:username/repos`.

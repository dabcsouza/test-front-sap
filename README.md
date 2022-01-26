# Teste Front-End usando RestAPI github Shaw and Partners
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

| Requisitos                                                                                                                                          |   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|---|
| Trazer todos os usuários cadastrados no github e exibir na tela seu   ID e Login .                                                                  | ✔️ |
| Ao clicar em um usuário, na tela principal, a aplicação deverá ser redirecionada para outra tela onde é exibido os detalhes do usuário              | ✔️ |
| Na tela criada no requisito 2 também deve conter uma tabela com informações referentes aos repositórios do usuário (id, Nome e  URL do repositório) | ✔️ |


## Entregando o projeto ✔️

1 - Guarde sua aplicação em um repositório privado no Bitbucket ou similares e conceda acesso a *andre.eccel@shawandpartners.com* e coloque o link de acesso ao reposiório na pagina de candidatura.

2 - faça o deploy da aplicação e coloque o link na sua página de candidatura.

- **Dica:**

  - É recomendado o uso do *Heroku* para fazer o deploy da sua aplicação pois pode ser feita de maneira fácil e gratuíta.

3 - Faça uma descrição para acesso ao código da sua aplicação (???) ❓

## Acessando ao código da aplicação 

### Requisitos

1 - Possuir acesso ao repositório do projeto
2 - Possuir um computador com o git instalado, configurado e com acesso ao github.
3 - Possuir o node instalado e atualizado.

### Acessando o projeto (Não foi desenvolvido a versão mobile da aplicação, resol. recomendada 1024x768)
#### Comandos

- `git clone git@github.com:dabcsouza/test-front-sap.git`
- `cd test-front-sap`
- `cd app-github`
- `npm install`
- `npm start`

### Link de acesso a aplicação http://sap-test-2930.herokuapp.com/

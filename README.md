# Breja (backend)

## 💻 Sobre o projeto

♻️ BREJA - 


Projeto desenvolvido durante  **o bootCamp da Gama**.
O Breja é um projeto de e-commerce, onde o cliente tem a opção de selecionar seus produtos, já com seu endereço previamente preenchido, e assim ser redirecionado para o whatsApp para um atendimento diferenciado, humanizado e personalizado.



### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## Como rodar o Back End

```bash
# Clone este repositório:
$ git clone https://github.com/MonicaIacy/breja-backend

# Acesse a pasta do projeto no terminal/cmd:
$ cd breja-backend

# Instale as dependências:
$ npm install

# Crie e ajuste o arquivo .env a partir do .env.example: 
DB_HOST="local que irá rodar o servidor (ex.: localhost)"
DB_PORT="porta utilizada pelo mysql"
DB_USER="nome de usuário no mysql"
DB_PASS="senha de usuário no mysql"
DB_NAME="Nome do banco de dados: breja"
PORT="porta para rodar o backend (ex.: 8000)"

# Gere o build:
$ npx tsc

# Crie banco de dados automaticamente:
$ npx sequelize db:create

# Crie a migration:
$ npx sequelize-cli db:migrate

# Popule seu banco de dados:
$ npx sequelize db:seed:all

# Inicie a aplicação:
$ npm run debug
```


# 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### ([NodeJS](https://nodejs.org//)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://www.npmjs.com/package/express)**
-   **[MYSQL](https://www.mysql.com//)**
-   **[JEST](https://jestjs.io/pt-BR/)**
-   **[Sequelize](https://www.npmjs.com/package/sequelize)**
-  

# 👨‍💻 💜Contribuidores👏  

  :)

<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/monicaiacy/"><img style="border-radius: 50%;" src="https://ibb.co/HNyJ7YV" width="100px;" alt=""/><br /><sub><b>Mônica Mendes</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Monica">👨‍🚀</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/vinicius-andrade-565a88242/"><img style="border-radius: 50%;" src="https://ibb.co/mH89xhd" width="100px;" alt=""/><br /><sub><b>Vinicius Andrade</b></sub></a><br /><a href="https://www.linkedin.com/in/vinicius-andrade-565a88242/" title="Vinicius Andrade">🚀</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/tiagokochem/"><img style="border-radius: 50%;" src="https://ibb.co/tQ9JMZb" width="100px;" alt=""/><br /><sub><b>Tiago kochem</b></sub></a><br /><a href="https://www.linkedin.com/in/tiagokochem/" title="Tiago Kochem">🚀</a></td>  
    </tr>
  </table>



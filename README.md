# Breja (backend)

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

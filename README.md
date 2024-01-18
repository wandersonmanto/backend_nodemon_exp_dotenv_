COMO RODAR O PROJETO ABAIXO
Instalar todas as dependencias indicadas pelo package.json
### npm install

Executar o projeto
### node index.js


SEQUENCIA DE PASSOS PARA A CRIACAO DO PROJETO
Start o package
### npm init

PACOTES PARA A EXECUCAO DO PROJETO
### Gerenciar requisicoes e executar servicos
npm install express

### Gerencia variaveis de ambiente
npm install dotenv --save
Usage: Crie uma arquivo .env na pasta principal do projeto:

Variavel
Exemplo: PORT = 3001

Importacao
require('dotenv').config()
console.log(process.env.PORT)

### Reiniciar o serviço automaticamente
npm install -g nodemon (global)
npm install --save-dev nodemon (desenvolvimento)

ou 

adicone diretamente no package.json um script "dev": "npx nodemon index.js",
Exute no terminal: npm run dev
Obs. O npx irá executar o nodemon sem instalar a dependencia no seu projeto.

### Personalize o nodemon para atender as necessidades do seu projeto.
Crie o arquivo nodemon.json na pasta principal do projeto
{
  "verbose": true,
  "delay": 20000,
  "watch": ["*.*", "../*"],
  "ext": "txt, js, ts, xlsx"
}

Das diversas opções que existem na documentação usei apenas 3 para exemplo.
delay: em quanto tempo os serviços serão reestabelecidos.
watch: monitora diretórios da aplicação, muito útil para monitorar diretórios além do diretorio principal.
ext: Para adicionar extensões extras a serem monitoradas no projeto.
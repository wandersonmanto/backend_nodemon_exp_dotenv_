## Backend - Recursos básicos para API com Node.js

A aplicação usa 3 dependencias bastantes conhecidas e difundidas entre os desenvolvedores e estudantes de programação e tem como objetivo mostrar a personalização das funções do nodemon.
As 3 dependencias juntas são a base do aprendizado dos primeiros projetos criados nos estudos de backend com Node.js

#### Dependencias do projeto

- **express**
- **dotenv**
- **nodemon**

##### COMO RODAR O PROJETO
* __*Instalar todas as dependencias indicadas pelo package.json*__
**npm install**

* __*Executar o projeto*__
**node index.js**
**npm run dev**

### CRIANDO O PROJETO
**Start o package**:

```sh
npm init
```

**Instalar o express**:
```sh
npm install express
```
Funções do express: 
- Gerenciar requisições de diferentes verbos HTTP em diferentes URLs.
- Definir as configurações comuns da aplicação web, como a porta a ser usada para conexão e a localização dos modelos que são usados para renderizar a resposta.
- Adicionar novos processos de requisição
- Intermediar comunicação entre cliente e servidor

**Instalar o dotenv**:
```sh
npm install dotenv --save
```
Resumo do dotenv: 

> Ele permite gerenciar variáveis de ambiente de forma eficiente em projetos front-end, facilitando a configuração e a > utilização de informações sensíveis, como chaves de API, tokens de autenticação e URLs de serviços externos.

__*Usage:*__
Crie um arquivo .env na pasta principal do projeto.
__*Exemplo de variavel: *__
PORT = 3001
__*Importacao:*__
require('dotenv').config()
console.log(process.env.PORT)

**Instalar o nodemon**:
```sh
npm install -g nodemon (global)
npm install --save-dev nodemon (desenvolvimento)
```

ou

```sh
adicone diretamente no package.json um script "dev": "npx nodemon index.js",
Exute no terminal: npm run dev
```
__*Obs. O npx irá executar o nodemon sem instalar a dependencia no seu projeto.*__

Resumo do nodemon:

> O nodemon é um utilitário que monitora as mudanças nos arquivos do seu projeto
> e reinicia automaticamente o servidor > Node. js quando necessário. 
> Assim, você não precisa parar e iniciar o servidor manualmente a cada modificação.

#### Personalize o nodemon para atender as necessidades do seu projeto.
Crie o arquivo nodemon.json na pasta principal do projeto
```sh
{
  "verbose": true,
  "delay": 20000,
  "watch": ["*.*", "../*"],
  "ext": "txt, js, ts, xlsx"
}
```

Das diversas opções que existem na documentação usei apenas 3 para exemplo.
delay: em quanto tempo os serviços serão reestabelecidos.
watch: monitora diretórios da aplicação, muito útil para monitorar diretórios além do diretorio principal.
ext: Para adicionar extensões extras a serem monitoradas no projeto.
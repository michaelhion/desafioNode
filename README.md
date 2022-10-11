<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


# Endpoint
http://localhost:3000/client-controller -- metodo get listar todos
http://localhost:3000/client-controller/{name} -- metodo get listar por nome
http://localhost:3000/client-controller/{id} -- metodo get listar por id
http://localhost:3000/client-controller -- metodo post para adicionar cliente
  exemplo de body
  body 
  ```JSON
	{
           "email": "email@email.com" ,
	   "name": "user2",
           "birthDay": "1980-01-02T00:00:00",
           "password": "userPassWord" ,
           "spouse": "random girl 2" ,
	   "son_name": "son #1" ,
	   "address": "avenue Paulista 2000", 
	   "phone_number": "99999955555"
 	}
```
  
        
http://localhost:3000/client-controller -- metodo put para adicionar cliente
  exemplo de body
  ```JSON
	{
           "email": "email@email.com" ,
	   "name": "user2",
           "birthDay": "1980-01-02T00:00:00",
           "password": "userPassWord" ,
           "spouse": "random girl 2" ,
	   "son_name": "son #1" ,
	   "address": "avenue Paulista 2000", 
	   "phone_number": "99999955555"
 	}
```
        
http://localhost:3000/client-controller/{id} -- metodo delete para excluir cliente

Este app esta configurado para utilizar o sql server, portanto para seu correto funcionamento sugiro que seja instalado o sql server via docker 
da seguinte forma:
no terminal digite o seguinte comando para baixar a imagem do sql server:
docker pull mcr.microsoft.com/mssql/server

depois digite também no terminal 

docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=<YourStrong@Passw0rd>" `
   -p 1433:1433 --name containername --hostname hostname `
   -d `
   mcr.microsoft.com/mssql/server:2022-latest

rode o container e configure ele em uma ferramenta apropriada pra manipular sql, ou utilize o terminal caso vc tenha o conhecimento para acessar o bash da imagem
crie um database chamado desafionode, rode o sistema após esse procedimento e ele ira criar a tabela do cliente

RECAPITULANDO
Primeiro faça o procedimento para configurar o sql server (não irá funcionar com outro db)
crie o database 'desafionode'
Rode o app
Fiz também um front em agular para consumir esse app, o repositório é https://github.com/michaelhion/desafionode_ui

Se possivel me de um feed back

Muito Obrigado!!

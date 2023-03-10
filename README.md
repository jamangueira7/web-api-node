<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;
</p>

<br>

# API com Node.js puro.

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Yarn](https://yarnpkg.com/) - 1.22.4
- [Npm](https://www.npmjs.com/) - 6.14.5
- [NodeJS](https://nodejs.org/en/) - v14.4.0
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)


## 💻 Projeto

Projeto de uma API sem nenhuma ferramente para auxiliar o Node.js.

Projeto do canal [Erick Wendel](https://www.youtube.com/watch?v=NxHY14rMPvc).

Testes: 
![img.png](.github%2Fimg.png)
![img_1.png](.github%2Fimg_1.png)
![img_2.png](.github%2Fimg_2.png)

## 🚀 Como Rodar

- Clone o projeto.
- npm install.
- `npm run dev` para iniciar o projeto.
- `npm test` para rodar os test simulados com bash.
- Instalar o Jq: https://stedolan.github.io/jq/download/

## ↗ Rotas

- **`GET /heroes`**: Rota para returnar todos o heróis

Retorna:
```
{
    "results": [
        {
            "id": 1,
            "name": "XuxaDaSilva",
            "age": 100,
            "power": "Ancient"
        },
        {
            "id": 1616374863972,
            "name": "Batman",
            "age": 200,
            "power": "Rich"
        }
    ]
}
```

- **`GET /heroes/$ID`**: Rota para returnar um heróis

Retorna:
```
{
    "results": {
        "id": 1678469127564,
        "name": "Batman",
        "age": 200,
        "power": "Rich"
    }
}
```

- **`POST /heroes`**: Rota para cadastrar todos

Envia:
```
{
    "name": "Batman",
    "age": 200,
    "power": "Rich"
}
```

Retorna:
```
{
   "success":"User created with success!",
   "id":1678470035678
}
```

- **`GET /`**: 404


Retorna:
```
{ 
    msg: 'Hello! Route does not exist!' 
}
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.


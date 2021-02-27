# weather-API-Consumer
Aplicação simples para consumir uma API com dados meteorológicos e trabalhar com os dados recebidos 

Aplicativo desenvolvido para consumir uma API de dados meteorologicos e apresentar informações de acordo com o nome da cidade desejada. E armazenar e disponibilizar as cidades mais pesquisadas e as ultimas pesquisas do usuario.
Utilizando Node.Js e Axios para receber e realizar requisicoes. Sequelize para trabalhar com o banco de dado e postgres para o banco de dados.


# Instalação:

para instalar as dependencias utilize o comando: 
`npm install`

1) crie uma pasta chamada `config` na raiz do projeto
- dentro dela crie dois arquivos:

   1) `database.js`  
   dentro desse arquivo será necessário colocar as credenciais do banco de dados, como no modelo:  
   ```
    module.exports{  
    dialect : 'postgres',  
        host : 'localhost',  
        username : 'postgres',  
        password : 'password',  
        database: 'db_name',  
    }  
   ```
   2) `api.json`
   * dentro desse arquivo será necessário colocar a chave de acesso a API./ 
Você pode gerar uma através do site: [OpenWeatherMap](https://openweathermap.org/api)

    * após isso coloque o seguinte modelo no arquivo:
    ```
    { "APIkey" : "CHAVEDAAPI"} 
    ```
2) Para criar o banco de dados utilize o seguinte comando no terminal:
* `npx sequelize-cli db:create`

3) Após isso é só iniciar o sistema utilizando
* `npm start`

4)  Você pode visualizar a pagina indo ao endereço:  
`localhost:3000`
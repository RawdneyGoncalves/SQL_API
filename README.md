## Configurar o arquivo .sequelizerc

Para realizar as migrations




const patch = require("path");
{
module.exports = {

    config: patch.resolve(__dirname, 'src', 'config', 'database.js'),
    'migrations-path': patch.resolve(__dirname, 'src', 'database', 'migrations'),
};
} 

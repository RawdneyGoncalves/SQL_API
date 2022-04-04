
# Configurar o arquivo .sequelizerc
Projeto designado para estudos de migration, controller, middleware. 
Foi voltado para a prática de criar APIS e forma organizada/funcional

Para realizar as migrations :


const patch = require("path");
{
module.exports = {

    config: patch.resolve(__dirname, 'src', 'config', 'database.js'),
    'migrations-path': patch.resolve(__dirname, 'src', 'database', 'migrations'),
};
} 

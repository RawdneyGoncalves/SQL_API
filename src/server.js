const express = require('express');
const routes = require('./routes')
const app = express();
const PORT = process.env.PORT || 3333
require("./database");
app.use(express.json());
app.use(routes);
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

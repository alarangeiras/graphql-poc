const app = require('./config/express');
require('./config/mongodb')();

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`o servidor esta rodando na porta ${PORT}`));
require("dotenv").config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

const consultasRoutes = require('./src/routes/consultas.routes');
const especialidadeRoutes = require('./src/routes/especialidade.routes');
const medicoRoutes = require('./src/routes/medico.routes');
const pacienteRoutes = require('./src/routes/paciente.routes');

app.use(express.json());
app.use(cors());

app.use(consultasRoutes);
app.use(especialidadeRoutes);
app.use(medicoRoutes);
app.use(pacienteRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta 3000`);
});
import express from "express";
import routes from "./src/routes/index.js";
import sequelize from "./src/config/database.js";

const app = express();
const PORT = 3000;

sequelize.sync().then(() => {
  console.log("Tabelas sincronizadas!");
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});

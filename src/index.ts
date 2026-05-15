import express, { Request, Response } from "express";
import gruposRoute from "./routes/grupos_route";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/grupos", gruposRoute);

app.use("/api/grupos", gruposRoute);
// Ruta de prueba
app.get("/", (req: Request, res: Response) => {
  res.send("API funcionando 🚀");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
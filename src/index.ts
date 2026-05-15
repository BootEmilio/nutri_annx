import express, { Request, Response } from "express";
import gruposRoute from "./routes/grupos_route";
import alimentosRoute from "./routes/alimentos_route";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/grupos", gruposRoute);
app.use("/alimentos", alimentosRoute);

app.use("/api/grupos", gruposRoute);
app.use("/api/alimentos",alimentosRoute);
// Ruta de prueba
app.get("/", (req: Request, res: Response) => {
  res.send("API funcionando 🚀");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
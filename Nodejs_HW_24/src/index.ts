import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TypeScript!");
});

app.post("/data", (req: Request, res: Response) => {
  const body = req.body;
  res.json({
    message: "Данные получены",
    received: body,
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});

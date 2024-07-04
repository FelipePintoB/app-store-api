import express from "express";
import { routerApi } from "./router";

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());

routerApi(app);

app.get("/", (req, res) => {
  res.send("Hello, TypeScript Node Express!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

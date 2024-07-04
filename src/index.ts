import express from "express";

const app = express();
const port = process.env.SERVER_PORT;

app.get("/", (req, res) => {
  res.send("Hello, TypeScript Node Express!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

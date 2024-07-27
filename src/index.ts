import express from "express";
// import cors from "cors";
import { routerApi } from "./routers";
import {
  boomErrorHandler,
  errorHandler,
  logError,
} from "./midelwares/error.handler";
import { SERVER_PORT } from "./config/config";

const app = express();
const port = SERVER_PORT;

// const whiteList = ["http:localhost:8080", `http:localhost:${port}`];
// const options: cors.CorsOptions = {
//   origin: (origin, callback) => {
//     console.log(origin)
//     if (!origin) {
//       callback(null, true);
//     }
//     if (origin && whiteList.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed"));
//     }
//   },
// };
// app.use(cors(options));

app.use(express.json());

routerApi(app);

app.get("/", (req, res) => {
  res.send("Hello, TypeScript Node Express!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

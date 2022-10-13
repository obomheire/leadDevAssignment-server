import express, {
  Application,
  Request,
  Response,
  ErrorRequestHandler,
} from "express";
import { config } from "dotenv";
config();
import morgan from "morgan";
import { Server } from "http";
import { connect } from "./connection/mongoConnect";
import { connectTestDB } from "./connection/mongoMemoryServer";

//App variables
const app: Application = express();
const api = process.env.API_URL;

//Middlewares
app.use(morgan("dev"));

//Routes
app.get("/", (req: Request, res: Response) => {
  res.send({ status: "Running", message: "Hello from leadDevAssignment API" });
});

//MongoDB Connection
if (process.env.NODE_ENV === "test") {
  connectTestDB();
  console.log(process.env.NODE_ENV);
} else {
  connect();
  console.log(process.env.NODE_ENV);
}

//App Port
const PORT = process.env.PORT || 3000;

//App Server
const server: Server = app.listen(PORT, () => {
  console.log(api);
  console.log(`App listning on port ${PORT}`);
});
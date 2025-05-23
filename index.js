import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/users',UserRoute);

app.listen(5000, () => {
  console.log("server is running");
});

import express from "express";
import bodyParser from "body-parser";
import todoRoutes from "./todo";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/todos", todoRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

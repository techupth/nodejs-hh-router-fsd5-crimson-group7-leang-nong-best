import express from "express";
import bodyParser from "body-parser";
import assignmentRouter from "./apps/assignmentRouter.js";
import accountRouter from "./apps/accountRouter.js";

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.use("/assignments", assignmentRouter);
app.use("/account", accountRouter);

app.get("/", (req, res) => {
  return res.send("Hello Teacher!!");
});

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});

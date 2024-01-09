import bodyParser from "body-parser";
import express from "express";
import accountRouter  from "./apps/accountRouter.js";
import assignmentRouter  from "./apps/assignmentRouter.js";

const app = express();
const port = 4001;

app.use(bodyParser.json());
app.use("/accounts", accountRouter);
app.use("/assignments", assignmentRouter);

app.get("/", (req, res) => {
  return res.send("Hello Teacher!!");
});
app.get("*", (req, res) => {
  return res.status(404).send("Not found");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});

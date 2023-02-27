import express, { Application, Request, Response } from "express";
import { calc } from "./Calc";
import { calculate } from "./Controller/Calculate";

var app: Application = express();
const port: 3000 | 5000 = 3000;
app.use(express.json());

app.get("/", (req: Request, res: Response): void => {
  res.send({ msg: "Hello This is a sample message to be checking 5000 " });
});

app.post("/test", (req: Request, res: Response): void => {
  let message = "";
  if (calc(req.body.val) === req.body.res) {
    message = "This test case passed";
  } else {
    message = "This test case failed";
  }
  res.send({ msg: message });
});

app.post("/calc", (req: Request, res: Response) => {
  res.send({ result: calculate(req.body.val) });
});

app.listen(port, (): void => {
  console.log(`Example app listening on port ${port}`);
});

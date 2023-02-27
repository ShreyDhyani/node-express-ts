"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Calc_1 = require("./Calc");
const Calculate_1 = require("./Controller/Calculate");
var app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send({ msg: "Hello This is a sample message to be checking 5000 " });
});
app.post("/test", (req, res) => {
    let message = "";
    if ((0, Calc_1.calc)(req.body.val) === req.body.res) {
        message = "This test case passed";
    }
    else {
        message = "This test case failed";
    }
    res.send({ msg: message });
});
app.post("/calc", (req, res) => {
    res.send({ result: (0, Calculate_1.calculate)(req.body.val) });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

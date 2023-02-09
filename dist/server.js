"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send({ msg: "Hello This is a sample mesage to be checking 2 " });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

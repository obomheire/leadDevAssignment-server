"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const morgan_1 = __importDefault(require("morgan"));
const mongoConnect_1 = require("./connection/mongoConnect");
const mongoMemoryServer_1 = require("./connection/mongoMemoryServer");
//App variables
const app = (0, express_1.default)();
const api = process.env.API_URL;
//Middlewares
app.use((0, morgan_1.default)("dev"));
//Routes
app.get("/", (req, res) => {
    res.send({ status: "Running", message: "Hello from leadDevAssignment API" });
});
//MongoDB Connection
if (process.env.NODE_ENV === "test") {
    (0, mongoMemoryServer_1.connectTestDB)();
    console.log(process.env.NODE_ENV);
}
else {
    (0, mongoConnect_1.connect)();
    console.log(process.env.NODE_ENV);
}
//App Port
const PORT = process.env.PORT || 3000;
//App Server
const server = app.listen(PORT, () => {
    console.log(api);
    console.log(`App listning on port ${PORT}`);
});

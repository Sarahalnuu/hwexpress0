"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employeRout_1 = __importDefault(require("./routes/employeRout"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/v1/employe', employeRout_1.default);
app.listen(5000, () => {
    console.log('Server is running in port 5000');
});

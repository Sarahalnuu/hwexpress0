"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const router = express_1.default.Router();
const employe = [];
router.get('/', (req, res, next) => {
    return res.json(employe);
});
router.post('/', (req, res, next) => {
    const newEmploye = req.body;
    if (!newEmploye.id) {
        return res.status(400).json({ message: "ID is required !" });
    }
    employe.push(newEmploye);
    return res.status(201).json({ message: "Emploey Added !" });
});
const nameSchema = zod_1.z.string().length(3);
nameSchema.parse('Saleh');
exports.default = router;

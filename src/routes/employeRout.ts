import express from "express";
import { Iemploye } from "../generalType";
import { z } from 'zod'
import vaildate from "../middleware/vaildate";
import {
     employeSchema, 
     EmployeSchemaType, } from "../zod_schema/emploey.schema";

const router= express.Router();

const employe: Iemploye[]=[];

router.get('/', (req, res, next) => {
    return res.json(employe)
});

router.post('/',vaildate(employeSchema) ,(req, res, next) => {
    const newEmploye = req.body as EmployeSchemaType;
    
    employe.push(newEmploye)
    return res.status(201).json({message:"Emploey Added !"})
});

// const userSchema = z.object({
//     username:z.string().min(3),
//     password:z.string().min(7).nullable(),
// });
// userSchema.parse({
//     username:'sarah',
//     password: null,
// })

export default router

import express from 'express';
import vaildate from "../middleware/vaildate";

import {
  parkSchema,
  ParkSchemaType,
} from '../zod_schema/parkSchema';

const router = express.Router();

let park : ParkSchemaType[]=[];

router.get('/', (req, res, next) => {
  return res.json(park);
});

router.post('/', vaildate(parkSchema), (req, res, next) => {
  const newpark = req.body as ParkSchemaType;
park.push(newpark);
return res.status(201).json({ message: ' Name added !' });
});

router.put('/:id',vaildate(parkSchema), (req, res) => {
const uppark = req.body as ParkSchemaType;
const { id } = req.params;
const updatedpark = park.filter((park) => {
    return park.id !== id;
  });

  updatedpark .push(uppark);
park = updatedpark;
 return res.json({
    message: 'Name updated  ',
  });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const newpa = park.filter((park) => {
      return park.id !== id ;
    });
  
    park = newpa;
    return res.json({
      message: ' Name deleted',
    });
});

export default router;
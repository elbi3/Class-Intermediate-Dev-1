import express from 'express';
import { z } from "zod";
import dogFacts from '../data/dogFacts.js';

const router = express.Router();

const factsQuerySchema = z.object({
  number: z
    .string()
    .optional()
    .transform(val => {
      const n = Number(val);
      //schema silently converts bad values into undefined:
      return Number.isInteger(n) && n > 0 ? n : undefined;
    })
});

/* GET users listing. */
router.get('/', function(req, res) {
  const q = req.query;
  const result = factsQuerySchema.safeParse(q);
  console.log("result: ", result);

  if (!result.success) {
    return res.status(400).json({ error: "Invalid query parameters"});
  };

  const { number } = result.data;

  if ( number === undefined ) { 
    //for incorrect query params, return all facts (very forgiving)
    return res.json(dogFacts);
  };
  
  return res.json(dogFacts.slice(0, number));
});

export default router;
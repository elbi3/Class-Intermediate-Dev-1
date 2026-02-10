import express from 'express';
const router = express.Router();
import dogFacts from '../data/dog_facts-1.js';
import { z } from "zod";

const factsQuerySchema = z.object({
  number: z
    .string()
    .optional()
    .transform(val => {
      const n = Number(val);
      return Number.isInteger(n) && n > 0 ? n : undefined;
    })
});

/* GET users listing. */
router.get('/:number', function(req, res, next) {
  const q = req.query;
  const result = factsQuerySchema.safeParse(q);
  console.log("result: ", result);
  const { success, data } = result;
  if (!success) {
    return res.status(400).json({ error: "Invalid query parameters"});
  };
  if (typeof data === "object") {
    return res.json(dogFacts);
  }
  return res.json(dogFacts.slice(0, data.value));
});

export default router;
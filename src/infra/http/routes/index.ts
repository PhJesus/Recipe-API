import { Router, Request, Response } from "express";

const router = Router()

router.use('/', (req: Request, res: Response) => {
  res.json({ status: 'Working' });
})

export default router
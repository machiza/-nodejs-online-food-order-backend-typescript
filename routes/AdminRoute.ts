import express, { Request, Response, NextFunction } from 'express';
import { CreateVandor, GetVendorById, GetVendors } from '../controllers';

const router = express.Router();

router.post('/vendor', CreateVandor)

router.post('/vendors', GetVendors)

router.post('/vendor/:id', GetVendorById)

router.get('/', (req: Request, res: Response, next: NextFunction) => {

  res.json({ message: 'Hello from Admin' })

});

export { router as AdminRoute };

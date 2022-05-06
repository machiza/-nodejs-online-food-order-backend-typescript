import { Request, Response, NextFunction } from 'express';
import { CreateVendorInput } from '../dto';
import { Vandor } from '../models';
import { GeneratePassword, GenerateSalt } from '../utility';

export const CreateVandor = async (req: Request, res: Response, next: NextFunction) => {

  const { name, address, pincode, foodType, email, password, ownerName, phone } = <CreateVendorInput>req.body;

  const existingVandor = await Vandor.findOne({ email });

  if (existingVandor !== null ) {
    return res.json({ 'message': 'A vandor is exist with this email ID' });
  }

  const salt = await GenerateSalt();
  const userPassword = await GeneratePassword(password, salt);

  const createdVandor = await Vandor.create({
    name,
    address,
    pincode,
    foodType,
    email,
    password: userPassword,
    salt,
    ownerName,
    phone,
    rating: 0,
    serviceAvailable: false,
    coverImage: [],
  });

  return res.json(createdVandor);

}

export const GetVendors = async (req: Request, res: Response, next: NextFunction) => {

}

export const GetVendorById = async (req: Request, res: Response, next: NextFunction) => {

}

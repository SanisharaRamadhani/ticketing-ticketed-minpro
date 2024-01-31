import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const regisValidation = [
  body('email').notEmpty().withMessage('Email required'),
  body('email').isEmail().withMessage('Email wrong'),
  body('password').notEmpty().withMessage('Password required'),
  body('password')
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 0,
      minUppercase: 0,
    })
    .withMessage(
      'Password must be at least 8 characters, minimum contain lowercase 1 and number 1',
    ),

  (req: Request, res: Response, next: NextFunction) => {
    const errorValidator = validationResult(req);
    if (!errorValidator.isEmpty()) {
      return res.status(400).send({ error: errorValidator.array() });
    }
    next();
  },
];

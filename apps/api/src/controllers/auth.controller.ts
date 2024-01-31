
import { Request, Response, NextFunction } from 'express';
import prisma from '../prisma';
import { genSalt, hash } from 'bcrypt';
import { transporter } from '../helpers/nodemailer';
import fs from 'fs';
import handlebars from 'handlebars';
import path from 'path';
import { sign } from 'jsonwebtoken';
import { redisClient } from '../helpers/redis';

export class AuthController {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { firstName, lastName, phoneNumber, email, password } = req.body;
      const checkUser = await prisma.user.findUnique({
        where: { email },
      });

      if (checkUser) {
        throw new Error('Email is already exist');
      }

      const salt = await genSalt(10);
      const hashPassword = await hash(password, salt);

      const newUser = await prisma.user.create({
        data: {
          firstName,
          lastName,
          phoneNumber,
          email,
          password,
        },
      });

      const templateMail = path.join(__dirname, '../template', 'sign-up.hbs');
      const templateSource = fs.readFileSync(templateMail, 'utf-8');
      const compileTemplate = handlebars.compile(templateSource);

      await transporter.sendMail({
        from: 'TICKETED GROUPS',
        to: email,
        subject: 'Registration Successfully',
        html: compileTemplate({ name: firstName + ' ' + lastName }),
      });

      res.status(201).send({ success: true, result: newUser });
    } catch (error: any) {
      console.log(error);
      next(error);
    }
  }

  async forgotPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const checkUser = await prisma.user.findUnique({
        where: { email: req.body.email },
      });
      if (checkUser) {
        const token = sign(
          {
            id: checkUser?.id,
            role: checkUser?.role,
            email: checkUser?.email,
          },
          'secretJWT',
        );

        await redisClient.setEx(`forgot ${req.body.email}`, 3600, token);

        const templateMail = path.join(
          __dirname,
          '../template',
          'forgotpassword.hbs',
        );
        const templateSource = fs.readFileSync(templateMail, 'utf-8');
        const compileTemplate = handlebars.compile(templateSource);

        await transporter.sendMail({
          from: 'TICKETED GROUPS',
          to: req.body.email,
          subject: 'Request Reset Password',
          html: compileTemplate({
            url: `http://localhost:3000/reset-password?tkn=${token}`,
          }),
        });

        return res.status(200).send({
          success: true,
          message: 'Check your email',
        });
      } else {
  
        throw new Error('Account is not exist');
      }
    } catch (error: any) {
      next(error);
    }
  }

  async resetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('Data from token :', req.dataUser);
      console.log('Data pass :', req.body.password);
      console.log('Data confirmPass :', req.body.confirmPassword);
    } catch (error) {
      next(error);
    }

  }
}

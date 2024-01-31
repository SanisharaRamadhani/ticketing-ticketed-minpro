import { Request, Response } from 'express';
import { transporter } from '../helpers/nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';
import { join } from 'path';
import prisma from '../prisma';

export class NodemailerController {
  async sendMail(req: Request, res: Response) {
    try {
      const templateSource = fs.readFileSync(
        join(__dirname, '../template/mail.hbs'),
        'utf-8',
      );
      const compiledTemplate = handlebars.compile(templateSource);
      await transporter.sendMail({
        from: 'TICKETED GROUPS',
        to: req.body.email,
        subject: 'Welcome to TICKETED APPS',
        html: compiledTemplate({ name: req.body.email.split('@')[0] }),
      });

      return res.status(200).send('Send email success');
    } catch (error: any) {
      console.log(error);
      return res.status(500).send(error);
    }
  }
}

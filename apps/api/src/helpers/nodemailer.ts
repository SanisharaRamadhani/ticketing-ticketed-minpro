import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'matebapoolajjad@gmail.com',
    pass: 'skbvwfprpxhbgkog',
  },
});

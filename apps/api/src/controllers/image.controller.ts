import { Request, Response } from 'express';

export class ImageController {
  async addNewImage(req: Request, res: Response) {
    try {
      console.log(req.file);
      return res
        .status(200)
        .send(`file ${req.file?.filename} successfully added`);
    } catch (error: any) {
      console.log(error);
      return res.status(500).send(error);
    }
  }

  async addMultipleImage(req: Request, res: Response) {
    try {
      console.log(req.files);
      return res.status(200).send(`multiple files successfully added`);
    } catch (error: any) {
      console.log(error);
      return res.status(500).send(error);
    }
  }
}

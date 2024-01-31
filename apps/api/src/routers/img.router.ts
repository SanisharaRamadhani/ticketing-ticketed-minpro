import express, { Router } from 'express';

import { ImgController } from '@/controllers/img.controller';

export class ImgRouter {
  private router: Router;
  private imgController: ImgController;

  constructor() {
    this.router = express.Router();
    this.imgController = new ImgController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/:filename', this.imgController.getImage);
  }

  public getRouter(): Router {
    return this.router;
  }
}
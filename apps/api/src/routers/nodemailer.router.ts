import { NodemailerController } from '../controllers/nodemailer.controller';
import { Router } from 'express';

export class NodemailerRouter {
  private router: Router;
  private nodemailerController: NodemailerController;

  constructor() {
    this.nodemailerController = new NodemailerController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/mail', this.nodemailerController.sendMail);
  }

  getRouter(): Router {
    return this.router;
  }
}

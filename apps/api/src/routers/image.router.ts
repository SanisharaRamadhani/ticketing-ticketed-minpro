import { Router } from 'express';
import { ImageController } from '../controllers/image.controller';
import { uploader } from '../middleware/uploader';

export class ImageRouter {
  private router: Router;
  private imageController: ImageController;

  constructor() {
    this.imageController = new ImageController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '/upload',
      uploader('IMG', '/image').single('gambar'),
      this.imageController.addNewImage,
    );
    this.router.post(
      '/multiple-upload',
      uploader('IMG', '/image').array('gambar', 4),
      this.imageController.addNewImage,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}

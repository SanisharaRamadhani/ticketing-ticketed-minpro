import { CreateEventsController } from '@/controllers/event.controller';
import { Router } from 'express';

import { uploader } from '@/middleware/uploader';


export class CreateEventsRouter {
  private router: Router;
  private createEvents: CreateEventsController;

  constructor() {
    this.createEvents = new CreateEventsController();
    this.router = Router();
    this.initializeRouter();
  }

  private initializeRouter(): void {

    this.router.post(
      '/create-event',
      uploader('IMG', '/image').single('image'),
      this.createEvents.createEvent,
    );
    this.router.get('/event-card', this.createEvents.getEvents);

  }

  getRouter(): Router {
    return this.router;
  }
}

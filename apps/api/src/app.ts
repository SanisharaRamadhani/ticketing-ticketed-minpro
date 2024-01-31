import express, {
  json,
  urlencoded,
  Express,
  Request,
  Response,
  NextFunction,
  Router,
} from 'express';
import cors from 'cors';
import { PORT } from './config';
// import { CreateEventsRouter } from './routers/event.router';
import { AuthRouter } from './routers/auth.router';
import { ImageRouter } from './routers/image.router';
import { NodemailerRouter } from './routers/nodemailer.router';
import { PostsRouter } from './routers/posts.router';
import { redisClient } from './helpers/redis';
import { CreateEventsRouter } from './routers/event.router';

export default class App {
  readonly app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
  }

  private routes(): void {
    const authRouter = new AuthRouter();
    const imageRouter = new ImageRouter();
    const nodemailerRouter = new NodemailerRouter();
    const postsRouter = new PostsRouter();
    const createEventsRouter = new CreateEventsRouter();

    this.app.get('/', (req: Request, res: Response) => {
      res.send(`Hello, TICKETED BUDDY!`);
    });
    this.app.get('/', (req: Request, res: Response) => {
      return res.status(200).send('<h1>Welcome to TICKETED GROUPS</h1>');
    });
    this.app.use('/auth', authRouter.getRouter());
    this.app.use('/image', imageRouter.getRouter());
    this.app.use('/mail', nodemailerRouter.getRouter());
    this.app.use('/posts', postsRouter.getRouter());
    this.app.use('/event', createEventsRouter.getRouter());
  }

  private handleError(): void {
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.log('ERROR : ', err);
        return res.status(500).send(err);
      },
    );
  }

  public async start(): Promise<void> {
    // await redisClient.connect();
    this.app.listen(PORT, () => {
      console.log(`API RUNNING : http://localhost:${PORT}/`);
    });
  }
}

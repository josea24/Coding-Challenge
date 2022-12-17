import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class EntryMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void): void {
    res.on('finish', () => {
      Logger.log({
        message: 'Logger',
        context: EntryMiddleware.name,
        functionName: 'EntryMiddleware',
        data: {
          requestedRoute: req.originalUrl,
          method: req.method,
          status: res.statusCode,
        },
      });
    });
    next();
  }
}

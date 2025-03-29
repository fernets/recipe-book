import compression from 'compression';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import hpp from 'hpp';

import jsonParseError from '../middleware/jsonParseError.middleware';
import routes from '../routes';

function createServer() {
  const app = express();

  // Basic middlewares
  app.use(express.json()); // Parses JSON request bodies
  app.use(jsonParseError as express.ErrorRequestHandler); // Handles JSON parsing errors
  app.use(cors()); // Enables Cross-Origin Resource Sharing
  app.use(helmet()); // Sets various HTTP headers for security

  // Additional protection middlewares
  app.use(rateLimit({ limit: 1000, windowMs: 15 * 60 * 1000 })); // Protects against brute-force attacks
  app.use(hpp()); // Protects against HTTP Parameter Pollution attacks
  app.use(compression()); // Compresses response bodies for all requests

  app.use('/api/v1', routes);

  return app;
}

export default createServer;

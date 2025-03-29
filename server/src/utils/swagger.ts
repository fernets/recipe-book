import type { Express, Request, Response } from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { version } from '../../package.json';
import log from './logger';

const options: swaggerJsDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Recipe API',
      version,
      description: '## API for retrieving recipes and detailed recipe information.',
      license: {
        name: 'ISC',
        url: 'https://opensource.org/licenses/ISC',
      },
      contact: {
        name: 'Fernets',
        url: 'https://github.com/fernets',
      },
    },
  },
  apis: ['./src/routes/*.ts', './src/schemas/*.ts'],
};

const swaggerSpec = swaggerJsDoc(options);

function swaggerDocs(app: Express, baseUrl: string, port: number) {
  // Swagger page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in JSON format
  app.get('/docs.json', (_: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  log.info(`Swagger docs available at ${baseUrl}:${port}/docs`);
}

export default swaggerDocs;

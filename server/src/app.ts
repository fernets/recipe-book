import * as dotenv from 'dotenv';
import * as path from 'path';
import log from './utils/logger';
import createServer from './utils/server';
import swaggerDocs from './utils/swagger';

const envFile = process.env.NODE_ENV === 'production' ? '.production.env' : '.development.env';

dotenv.config({ path: path.resolve(process.cwd(), envFile) });

const app = createServer();

const PORT = Number(process.env.PORT) || 5000;
const BASE_URL = process.env.BASE_URL || 'http://localhost';

function start() {
  app.listen(PORT, async () => {
    log.info(`App started at ${BASE_URL}:${PORT}`);

    swaggerDocs(app, BASE_URL, PORT);
  });
}

start();

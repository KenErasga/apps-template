import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = '3001';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: '*' });
  await app.listen(PORT);
}

void bootstrap();

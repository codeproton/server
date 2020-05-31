import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClusterService } from './essential/cluster.service';

async function bootstrap() {
  const { PORT = 3000 } = process.env

  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}

ClusterService.clusterize(bootstrap)
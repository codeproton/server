import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EssentialModule } from './essential/essential.module';

@Module({
  imports: [EssentialModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

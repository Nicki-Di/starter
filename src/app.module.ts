import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { TmpModule } from './tmp/tmp.module';

@Module({
  imports: [UsersModule, PrismaModule, TmpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

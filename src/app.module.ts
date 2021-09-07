import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AppService } from './app.service';
import { ReportController } from './reports/report/report.controller';
import { ReportService } from './reports/report/report.service';
import { ReportsModule } from './reports/reports.module';
import { UserController } from './users/user/user.controller';
import { UserService } from './users/user/user.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [],
    synchronize: true
  }), ReportsModule, UsersModule],
  controllers: [AppController, ReportController, UserController],
  providers: [AppService, UserService, ReportService],
})
export class AppModule {}

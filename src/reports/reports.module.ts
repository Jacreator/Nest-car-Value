import { Module } from '@nestjs/common';
import { ReportService } from './report/report.service';
import { ReportController } from './report/report.controller';

@Module({
  providers: [ReportService],
  controllers: [ReportController]
})
export class ReportsModule {}

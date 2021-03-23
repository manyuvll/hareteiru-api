import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './modules/weather/weather.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), WeatherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

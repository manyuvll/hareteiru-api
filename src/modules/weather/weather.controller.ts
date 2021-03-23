import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
    constructor(private readonly weatherService: WeatherService) { }

    @Get(':cityId')
    async findOne(@Param('cityId') cityId: number): Promise<any> {
        var result = await this.weatherService.findOne(cityId)
        return result.data;
    }
}

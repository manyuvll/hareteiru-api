import { HttpService } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios'

@Injectable()
export class WeatherService {
    constructor(private httpService: HttpService) {}

    async findOne(cityId: number): Promise<AxiosResponse> {
        return this.httpService.get(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${process.env.OWM_TOKEN}`)
        .toPromise();
    }
}

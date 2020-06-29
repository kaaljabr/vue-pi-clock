import WeatherAdapter from '../adapters/WeatherAdapter';

class WeatherService {
    static async getWeather() {
        return await WeatherAdapter.getWeatherNow();
    }
}
 export default WeatherService;

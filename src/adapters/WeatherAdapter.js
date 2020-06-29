import weatherConnector from '../connectors/WeatherConnector';
import Config from '../config/Config';

class WeatherAdapter {
    static async getWeatherNow() {
        const response = await weatherConnector.get('weather', {
            params: {
                appid: Config.WEATHER_API_KEY,
                lat: Config.LOCATION_LATITUDE,
                lon: Config.LOCATION_LONGITUDE,
                units: Config.WEATHER_UNITS
            },
        });
        return response.data;
    }
}

export default WeatherAdapter;

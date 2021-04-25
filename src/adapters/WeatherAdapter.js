import apiConnector from '../connectors/ApiConnector';

class WeatherAdapter {
    static async getWeatherNow() {
        const response = await apiConnector.get('weather');
        return response.data;
    }
}

export default WeatherAdapter;

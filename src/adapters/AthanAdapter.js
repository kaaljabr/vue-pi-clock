import apiConnector from '../connectors/ApiConnector';

class AthanAdapter {
    static async getPrayerTimes() {
        const response = await apiConnector.get('/athan/timings');
        return response.data;
    }
}

export default AthanAdapter;

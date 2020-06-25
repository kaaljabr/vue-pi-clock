import athanConnector from '../connectors/AthanConnector';

class AthanAdapter {
    static async getPrayerTimes() {
        const response = await athanConnector.get('timings');
        return response.data;
    }
}

export default AthanAdapter;

import AthanAdapter from '../adapters/AthanAdapter';

const TIMES = {
    IMSAK: 'Imsak',
    FAJR: 'Fajr',
    SUNRISE: 'Sunrise',
    DHUHR: 'Dhuhr',
    ASR: 'Asr',
    MAGHRIB: 'Maghrib',
    ISHA: 'Isha',
    MIDNIGHT: 'Midnight',
};

class AthanService {
    static async getAthanTimings() {
        const athanTimes = await AthanAdapter.getPrayerTimes();
        return {
            fajr: athanTimes.timings[TIMES.FAJR],
            duhr: athanTimes.timings[TIMES.DHUHR],
            asr: athanTimes.timings[TIMES.ASR],
            maghreb: athanTimes.timings[TIMES.MAGHRIB],
            isha: athanTimes.timings[TIMES.ISHA],
            hijriDay: athanTimes.date.hijri.day,
            hijriMonth: athanTimes.date.hijri.month.ar,
        }
    }
}
 export default AthanService;

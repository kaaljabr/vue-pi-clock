class Config {
    static ATHAN_BASE_URL = process.env.VUE_APP_ATHAN_BASE_URL;

    static ATHAN_METHOD = process.env.VUE_APP_ATHAN_METHOD;

    static LOCATION_LATITUDE = process.env.VUE_APP_LOCATION_LATITUDE;

    static LOCATION_LONGITUDE = process.env.VUE_APP_LOCATION_LONGITUDE;

    static WEATHER_BASE_URL = process.env.VUE_APP_WEATHER_BASE_URL;

    static WEATHER_API_KEY = process.env.VUE_APP_WEATHER_API_KEY;

    static WEATHER_UNITS = process.env.VUE_APP_WEATHER_UNITS;

}

export default Config;

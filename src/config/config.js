var prodConfig = {
    BASE_URL: 'http://meet.tamada.of.by/rest/web'
};

var devConfig = {
    BASE_URL: 'http://meet-api.loc/rest/web'
};

export const isProduction = process.env.NODE_ENV === 'production';
const config = isProduction ? prodConfig : devConfig;

export default config;
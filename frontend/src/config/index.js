export default {
  apiUrl: process.env.NODE_ENV === 'production' ? '/api/' : '//localhost:3000/api/',
  cloudinary: {
    baseUrl: 'https://api.cloudinary.com/v1_1',
    uploadPreset: process.env.NODE_ENV === 'production' ? 'prod-preset' : 'dev-preset',
    cloudName: 'training-app-cloud',
    apiKey: '564922836677172'
  }
}
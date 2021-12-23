import axios from 'axios';

// proccess.env.VUE_APP_CLOUDINARY_URL
import config from '@/config'

const { baseUrl, cloudName: CLOUD_NAME, uploadPreset: UPLOAD_PRESET, apiKey: API_KEY } = config.cloudinary

const imageUploader = axios.create({baseURL: baseUrl})

export const uploadImg = async (file, cloudName) => {
    // Defining our variables
    const UPLOAD_URL = `/${cloudName || CLOUD_NAME}/image/upload`
    const FORM_DATA = new FormData();
    // Building the request body
    FORM_DATA.append('file', file)
    FORM_DATA.append('upload_preset', UPLOAD_PRESET)
    // FORM_DATA.append('api_key', API_KEY)
    // Sending a post method request to Cloudniarys' API
    try {
        const res = await imageUploader.post(UPLOAD_URL, FORM_DATA)
        return res.data;
    } catch (err) {
        console.error('ERROR!', err)
    }
}
export default {
  uploadImg
}
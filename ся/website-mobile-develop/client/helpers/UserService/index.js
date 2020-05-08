import {HttpError} from '../ErrorService';
import axios from 'axios'

export default async function sendUserInfo(userInfo) {
  try {
    await axios.post('https://8fow5zs2x4.execute-api.eu-central-1.amazonaws.com/prod/create-deal', userInfo)
    return 'OK';
  } catch (error) {
    return 'POCHTI OK' // todo fixup
    if (error.response) {
      throw new HttpError(error.response);
    } else {
      throw error;
    }
  }
}
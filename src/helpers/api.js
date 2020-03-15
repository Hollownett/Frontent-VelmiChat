import axios from 'axios';
import { getJwt } from './jwt';

export default axios.create({
  baseURL: `http://localhost:3001/api`,
  headers:{
    Authorization: 'Bearer ' + getJwt()
  }
});
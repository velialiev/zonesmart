import Http from './api.controller';
import { API_URLS } from '../constants/API_URLS';

const getChannelList = () => {
  return Http.get(API_URLS.GET_CHANNELS);
};

export const ChannelController = {
  getChannelList,
};

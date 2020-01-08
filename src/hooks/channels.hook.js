import { useEffect, useState } from 'react';
import { ChannelController } from '../controllers/channel.controller';

const useChannels = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await ChannelController.getChannelList();
      setChannels(res.results);
    })();
  }, []);

  return channels;
};

export default useChannels;

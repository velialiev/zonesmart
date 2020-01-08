import { useEffect, useState } from 'react';
import ProductController from '../controllers/product.controller';

const useCategories = (selectedChannelId, channels, parentId = '', level) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      if (selectedChannelId) {
        const channel = channels.find(channel => channel.id === selectedChannelId);
        const categoriesResponse = await ProductController.getCategories(channel.domain, parentId, level);
        setCategories(categoriesResponse.results);
      }
    })();
  }, [selectedChannelId, channels, parentId, level]);

  return categories;
};

export default useCategories;

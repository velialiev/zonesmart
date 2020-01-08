import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import styles from './CategorySelectionPage.module.scss'
import { Select, InputLabel, MenuItem } from '@material-ui/core';
import { ChannelController } from '../../controllers/channel.controller';
import useChannels from '../../hooks/channels.hook';
import ProductController from '../../controllers/product.controller';
import useCategories from '../../hooks/categories.hook';
import Categories from '../../components/Categories/Categories';

const CategorySelectionPage = () => {
  const [selectedChannelId, setSelectedChannelId] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [level, setLevel] = useState(1);
  const channels = useChannels();
  const categories = useCategories(selectedChannelId, channels, selectedCategoryId, level);

  const onCategoryClick = (category) => {
    if (category.is_leaf) {
      ProductController.getCategoryAspects(category.id);
      return;
    }

    setSelectedCategoryId(category.category_id);
    setLevel('');
  };

  return (
    <>
      <Container maxWidth="md">
        <div className="center-wrap">
          <div className={'box ' + styles['category-selection-page-box']}>
            <InputLabel id="channelSelect">Age</InputLabel>
            <Select
              value={selectedChannelId}
              onChange={({ target: { value } }) => {
                setSelectedChannelId(value)
              }}
              labelId="categorySelect"
            >
              {
                channels.map(channel =>
                  <MenuItem key={channel.id}
                            value={channel.id}>{channel.name}</MenuItem>
                )
              }
            </Select>

            <Categories className={styles.categories}
                        categories={categories}
                        onCategoryClick={onCategoryClick}/>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CategorySelectionPage;

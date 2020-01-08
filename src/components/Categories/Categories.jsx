import React from 'react';
import styles from './Categories.module.scss';

const Categories = ({ categories, onCategoryClick, ...props }) => {
  return (
    <div {...props}>
      {
        categories.map(category => (
          <div key={category.id}
               className={styles.category}
               onClick={() => onCategoryClick(category)}>
            <span>{category.name}</span>
            { !category.is_leaf && <span>></span> }
          </div>
        ))
      }
    </div>
  );
};

export default Categories;

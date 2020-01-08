import Http from './api.controller';
import { API_URLS } from '../constants/API_URLS';
import generateUrl from '../utils/url-generator.util';

const getCategories = (domainId, parentId = '', level) => {
  return Http.get(API_URLS.GET_CATEGORIES, { domain_id: domainId, level, parent_id: parentId });
};

const getCategoryAspects = (categoryId) => {
  return Http.get(
    generateUrl(API_URLS.GET_CATEGORY_ASPECTS, { categoryId }),
  );
};

const ProductController = {
  getCategories,
  getCategoryAspects,
};

export default ProductController;

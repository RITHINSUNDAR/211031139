import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test/companies';

export const getProducts = async (company, category, topN, minPrice, maxPrice) => {
  try {
    const response = await axios.get(
      ${API_BASE_URL}/${company}/categories/${category}/products/top-${topN}?minPrice=${minPrice}&maxPrice=${maxPrice}
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching products', error);
    return [];
  }
};
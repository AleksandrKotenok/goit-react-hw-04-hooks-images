import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '24019478-a45fd8183fcedd4cf851bb538',
  image_type: 'photo',
  orientation: 'horizontal',
  type: 'photo',  
  per_page: 12,
};

export const  Api = async (search, page) => {
  try {
    const { data } = await axios.get('', {
      params: {
        q: search,
        page
      },
    });

    return data;
  } catch (event) {
    console.error(event);
  }
};
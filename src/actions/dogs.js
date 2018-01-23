import axios from 'axios';

export const GOT_DOGS = 'GOT_DOGS';

export const getDogs = () => (dispatch) => {
  axios.get('https://dog.ceo/api/breeds/list').then((res) => {
    dispatch({
      type: GOT_DOGS,
      payload: res.data.message,
    });
  }).catch((err) => {
    console.log(err);
  });
};

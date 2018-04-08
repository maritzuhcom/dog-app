import axios from 'axios';

export const GET_DOG_NAMES = 'get_dog_names';
export const GET_DOG_PICS = 'get_dog_pics';

export const getDogs = () => (dispatch) => {
  axios.get('https://dog.ceo/api/breeds/list').then((res) => {
    dispatch({
      type: GET_DOG_NAMES,
      payload: res.data.message,
    });
  });
};

export const getDogPics = dogName => (dispatch) => {
  axios.get(`https://dog.ceo/api/breed/${dogName}/images`).then((res) => {
    dispatch({
      type: GET_DOG_PICS,
      payload: res.data.message,
    });
  });
};

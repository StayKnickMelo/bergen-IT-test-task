import {
  FETCH_PHOTO,
  FETCH_PHOTOS
} from './types';

import axios from 'axios';

export const fetchPhotos = () => async dispatch => {

  try {

    const res = await axios.get('https://jsonplaceholder.typicode.com/photos');

    const photos = res.data.splice(0, 24);

    const size = 6;

    const fourArrs = [];

    for (let i = 0; i < photos.length; i += size) {
      fourArrs.push(photos.slice(i, i + size));
    };

    dispatch({
      type: FETCH_PHOTOS,
      payload: fourArrs
    })
  } catch (error) {
    console.error(error)
  }
};


export const fetchPhoto = (photoId) => async dispatch => {

  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/albums/${photoId}/photos`);

    dispatch({
      type: FETCH_PHOTO,
      payload: res.data[0]
    })

  } catch (error) {
    console.error(error);
  }
}
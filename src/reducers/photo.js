
import {
  FETCH_PHOTO,
  FETCH_PHOTOS
} from '../actions/types';

const initialState = {
  photos: [],
  photo: {}

};

const photoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PHOTOS:
      return {
        ...state,
        photos: payload
      }
    case FETCH_PHOTO:
      return {
        ...state,
        photo: payload
      }
    default:
      return state
  }
};


export default photoReducer;
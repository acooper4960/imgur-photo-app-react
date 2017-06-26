import {actionTypes} from '../util/consts';

export default function galleryReducer(state = [], action){
  let newState;
  switch(action.type){
    case actionTypes.LOAD_GALLERY_SUCCESS:
      newState = Object.assign({},state);
      if(!newState.images)
        newState.images=action.images;
      else
        newState.images = newState.images.concat(action.images);
      return newState;
    default: return state;
  }
}


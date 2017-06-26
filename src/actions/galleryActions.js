import {actionTypes} from '../util/consts';
import {searchGallery} from '../services/imgur';

import thunk from 'redux-thunk';

export function updateGallery(images){
  return {type: (actionTypes.LOAD_GALLERY_SUCCESS), images}
}

export function searchImgur(section = 'hot', sort = 'viral', page = 0) {
  return function (dispatch) {
    searchGallery(section, sort, page).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        dispatch(updateGallery(response.data));
      }
      //throw new Error(response.statusText)
    })
  }
}



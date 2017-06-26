//root reducer
import {combineReducers} from 'redux'
import images from './galleryReducer'


const rootReducer = combineReducers({
  images
});

export default rootReducer;

import fetchival from 'fetchival'
import {api} from '../util/consts'
const CLIENT_ID = api.CLIENT_ID;
const API_BASE = api.API_BASE;

const request = fetchival(API_BASE, {
  mode: 'cors',
  headers:{
    Authorization: 'Client-Id ' + CLIENT_ID
  }
});


export function searchGallery(section = 'hot', sort = 'viral', page = 0) {

  return request(`gallery/${section}/${sort}/${page}`).get();

}

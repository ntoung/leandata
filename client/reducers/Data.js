import { SET_SERIES, 
         SET_HEADERS, 
         SET_LABELS,
         SET_DATA,
       } from '../actions/DataActions';

export function Data(state = {
  headers: [],
  series: {},
  labels: [],
  data: []
}, action) {
  switch (action.type) {
    case SET_HEADERS:
      return Object.assign({}, state, { headers: action.payload.headers })
    case SET_SERIES:
      return Object.assign({}, state, { series: action.payload.series })
    case SET_LABELS:
      return Object.assign({}, state, { labels: action.payload.labels })
    case SET_DATA:
      return Object.assign({}, state, { data: action.payload.data })
    default:
      return Object.assign({}, state, { })
  }

  return state;
}
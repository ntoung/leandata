import {
  SET_DATE_START,
  SET_DATE_END,
  SET_DISPLAYED_SERIES } from '../actions/GraphActions';


export function Graph(state = {
  displayedSeries: {},
  dateStart: undefined,
  dateEnd: undefined  
}, action) {
  switch (action.type) {
    case 'UPDATE':
      return Object.assign({}, state, { })
    case SET_DATE_START:
      return Object.assign({}, state, { dateStart: action.payload.dateStart })
    case SET_DATE_END:
      return Object.assign({}, state, { dateEnd: action.payload.dateEnd })
    case SET_DISPLAYED_SERIES:
      return Object.assign({}, state, { displayedSeries: action.payload.displayedSeries })
    default:
      return Object.assign({}, state, { })
  }

  return state;
}
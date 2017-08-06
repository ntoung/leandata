export const SET_DATE_START = 'SET_DATE_START';
export const SET_DATE_END = 'SET_DATE_END';
export const SET_DISPLAYED_SERIES = 'SET_DISPLAYED_SERIES';


export function setDateStart(payload) {
  return {
    type: SET_DATE_START,
    payload
  };
}

export function setDateEnd(payload) {
  return {
    type: SET_DATE_END,
    payload
  };
}

export function setDisplayedSeries(payload) {
  return {
    type: SET_DISPLAYED_SERIES,
    payload
  };
}

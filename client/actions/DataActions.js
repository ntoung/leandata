export const SET_SERIES = 'SET_SERIES';
export const SET_HEADERS = 'SET_HEADERS';
export const SET_LABELS = 'SET_LABELS';
export const SET_DATA = 'SET_DATA';

export function setSeries(payload) {
  return {
    type: SET_SERIES,
    payload
  }
}

export function setHeaders(payload) {
  return {
    type: SET_HEADERS,
    payload
  }
}

export function setLabels(payload) {
  return {
    type: SET_LABELS,
    payload
  }
}

export function setData(payload) {
  return {
    type: SET_DATA,
    payload
  }
}


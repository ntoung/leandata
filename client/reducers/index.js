import { combineReducers } from 'redux';
import { Data } from './Data';
import { Graph } from './Graph';

export const initialState = { 
  Data: {
    headers: [],
    labels: [],
    series: {},
    data: []
  },
  Graph: {
    displayedSeries: {},
    dateStart: undefined,
    dateEnd: undefined,
  }
};

export const reducers = combineReducers({
  Data,
  Graph
});
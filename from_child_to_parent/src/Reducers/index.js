import {combineReducers} from 'redux';

import {reducer1} from './Reducer1';
import {reducer2} from './Reducer2';

export default combineReducers(reducer1, reducer2);
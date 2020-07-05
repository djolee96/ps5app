import { combineReducers } from 'redux';
import consoleReducer from './consoleReducer';
import controllerReducer from './controllerReducer';
import gameReducer from './gameReducer';
import tvReducer from './tvReducer';
import accountReducer from './accountReducer';
import mainReducer from './mainReducer';
import addReducer from './addReducer';



export default combineReducers(
    {
        consoles: consoleReducer,
        controllers: controllerReducer,
        games: gameReducer,
        tvs: tvReducer,
        user: accountReducer,
        main: mainReducer,
        checkout: addReducer
    }
)
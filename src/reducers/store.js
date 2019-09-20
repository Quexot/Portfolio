import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

const configure store = preloadedState => (
    createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(),
    )
);

const store = configureStore({})

export default store;
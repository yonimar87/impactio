import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const enhancer = applyMiddleware(thunk)
    console.log('step 1: configuring the store ')
    return createStore(
        rootReducer,
        initialState,
        enhancer
    );
}

import {createStore, bindActionCreators} from "redux";
import reducer from './reducer';
import * as actions from "./actions";

const store = createStore(reducer);
const {dispatch} = store;


const {inc, dec, rnd, zero} = bindActionCreators(actions, dispatch);


document.getElementById('rnd')
    .addEventListener('click', () => {
        const payload = Math.floor(Math.random() * 9);
        rnd(payload)
    });

document.getElementById('inc')
    .addEventListener('click', inc);

document.getElementById('dec')
    .addEventListener('click', dec);

document.getElementById('zero')
    .addEventListener('click', zero);

const update = () => {
    document.getElementById('counter')
        .innerHTML = store.getState()
};


store.subscribe(update);

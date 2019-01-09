import {createStore} from "redux";


const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'RND':
            return state + action.payload;
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'ZERO':
            return state = 0;
        default:
            return state;
    }
};

const store = createStore(reducer);

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = (payload) => ({type: 'RND', payload});
const zero = () => ({type: 'ZERO'});


document.getElementById('rnd')
    .addEventListener('click', () => {
        const payload = Math.floor(Math.random()*9);
        store.dispatch(rnd(payload));
    });

document.getElementById('inc')
    .addEventListener('click', () =>
        store.dispatch(inc()));

document.getElementById('dec')
    .addEventListener('click', () =>
        store.dispatch(dec()));

document.getElementById('zero')
    .addEventListener('click', () =>
        store.dispatch(zero()));

const update = () => {
    document.getElementById('counter')
        .innerHTML = store.getState()
};


store.subscribe(update);

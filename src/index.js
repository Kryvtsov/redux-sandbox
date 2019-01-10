import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, bindActionCreators} from "redux";
import reducer from './reducer';
import * as actions from "./actions";
import Counter from './counter';

const store = createStore(reducer);
const {dispatch} = store;


const {inc, dec, rnd, zero} = bindActionCreators(actions, dispatch);

const update = () => {
    ReactDOM.render(
        <Counter
            counter = {store.getState()}
            inc = {inc}
            dec = {dec}
            zero = {zero}
            rnd = {()=> {
                const value = Math.floor(Math.random()*9);
                return rnd(value)
            }}
        />,
        document.getElementById('root') );
};

update();
store.subscribe(update);



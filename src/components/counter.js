import React from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import * as actions from "../actions";

const Counter = ({counter , dec,inc,rnd,zero}) => {
    return(
        <div className="jumbotron">
            <h2 id="counter">{counter}</h2>
            <button
                onClick={dec}
                className="btn btn-primary btn-lg">DEC</button>
            <button
                onClick={inc}
                className="btn btn-primary btn-lg">INC</button>
            <button
                onClick={rnd}
                className="btn btn-primary btn-lg">RND</button>
            <button
                onClick={zero}
                className="btn btn-primary btn-lg">ZERO</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        counter: state
    }
};


export default connect(mapStateToProps, actions)(Counter);
import React from 'react';
import classes from './BuildControler.module.css';

 const buildControler = (props) => {

    return (

        <div className={classes.BuildControler}>
            <div className={classes.Label}>{props.label}</div>
            <button 
            className={classes.Less}
            onClick={props.removed}
            disabled={props.disabled}>
            LESS
            </button>

            <button 
            className={classes.More}
            onClick={props.added}>
            MORE
            </button>
        </div>
    )
 }

 export default buildControler;
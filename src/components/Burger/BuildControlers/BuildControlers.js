import React from 'react';

import BuildControler from './BuildControler/BuildControler';
import classes from './BuildControlers.module.css';


const controlers = [

    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]
 const buildControlers = (props) => {

    return (

        <div className={classes.BuildControlers}>
            {controlers.map(ctrl =>
            <BuildControler 
            key={ctrl.label} 
            label={ctrl.label}
            added={() => props.ingedientsAdded(ctrl.type)}
            removed={() => props.ingedientsRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]} />
            )}
        </div>
    )
 }

 export default buildControlers;
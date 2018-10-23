import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const control = [
    {label: 'Saldad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Chesse', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {
            control.map((ctrl)=>(
                <BuildControl
                 key={ctrl.label}
                  label={ctrl.label}
                  added = {() => props.ingredientAdded(ctrl.type)}
                  />
            ))
        }
    </div>
);

export default buildControls;
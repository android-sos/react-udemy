import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const control = [
    {label: 'Saldad', type: 'salda'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Chesse', type: 'chesse'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {
            control.map((ctrl)=>(
                <BuildControl key={ctrl.label} label={ctrl.label}/>
            ))
        }
    </div>
);

export default buildControls;
import React from 'react';
import classes from './NavigationItems.css'

import NavigationItem from './NavigationItem/NavigationItem'


const navigationsItems = () => (
    <ul className={classes.NavigationsItems}>
       <NavigationItem link='/' active>
            BurguerBuilder
       </NavigationItem>
       <NavigationItem link='/' active>
            Checkout
       </NavigationItem>
    </ul>
);

export default navigationsItems;
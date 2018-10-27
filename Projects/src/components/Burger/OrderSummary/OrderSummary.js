import React from 'react';
import Aux from  '../../../hoc/Aux'
const orderSummary = (props) => {
    const ingesdientsSummary = Object.keys(props.ingredients)
        .map((key) => {
            return <li key= {key}> <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]} </li>
        });
    return (
        <Aux>
            <h3>Your Oder</h3>
            <p>Delicius Hamburger with Delicus Ingredientes</p>
            <ul>
                {ingesdientsSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    )
}

export default orderSummary;
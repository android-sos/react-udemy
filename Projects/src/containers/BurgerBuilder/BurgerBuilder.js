import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls'

const INGREDIENTS_PRICE = {
    salad: 1,
    bacon: 3,
    cheese: 4,
    meat: 1
}
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 3,
            cheese: 4,
            meat: 1
        },
        totalPrice:0
    }

    addIngresdients = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updateCount;

        const price = this.state.totalPrice + INGREDIENTS_PRICE[type];

        this.setState({ingresdients: updateIngredients, totalPrice: price});
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls/>
            </Aux>
        );
    }
}

export default BurgerBuilder;
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
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice:0
    }

    addIngresdientsHandler = (type) => {
debugger;
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updateCount;

        const price = this.state.totalPrice + INGREDIENTS_PRICE[type];

        this.setState({ingredients: updateIngredients, totalPrice: price});
        console.log(this.state.ingredients);
    }

    removeIngresdients = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updateCount;

        const price = this.state.totalPrice - INGREDIENTS_PRICE[type];

        this.setState({ingresdients: updateIngredients, totalPrice: price});
        
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                 ingredientAdded = {this.addIngresdientsHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
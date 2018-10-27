import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls'

import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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
        totalPrice:15,
        purchasable: false,
    }

    addIngresdientsHandler = (type) => {

        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updateCount;

        const price = this.state.totalPrice + INGREDIENTS_PRICE[type];

        this.setState({ingredients: updateIngredients, totalPrice: price});
        this.updatePurshaseState(updateIngredients);
    }

    removeIngresdientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updateCount;

        const price = this.state.totalPrice - INGREDIENTS_PRICE[type];

        this.setState({ingredients: updateIngredients, totalPrice: price});
        this.updatePurshaseState(updateIngredients);
        
    }

    updatePurshaseState (ingredients) {

        const sum = Object.keys(ingredients)
        .map ((igKey)=>{
            return  ingredients[igKey];
        })
        .reduce((sum, el)=> {
            return sum + el;
        },0);

        this.setState({purchasable: sum > 0});
    }

    render () {
        return (
            <Aux>
                <Modal>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                 ingredientAdded = {this.addIngresdientsHandler}
                 ingredientRemoved = {this.removeIngresdientsHandler}
                 price = {this.state.totalPrice}
                 purchasable = {this.state.purchasable}
                />
                
            </Aux>
        );
    }
}

export default BurgerBuilder;
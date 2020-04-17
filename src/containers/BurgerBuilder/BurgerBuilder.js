import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Aux';
import BuildControlers from '../../components/Burger/BuildControlers/BuildControlers';



const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 1.2,
    cheese: 0.7,
    meat: 1.3,
}
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,

        },
         
        totalPrice: ''
    }

    addIngredientsHandler = (type) => {
        const OldCount = this.state.ingredients[type];
        const updatedCount = OldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type]= updatedCount;
        const priceAddition= INGREDIENT_PRICES[type];
        const oldPrice= this.state.totalPrice;
        const newPrice= oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
   
    }


        removeIngredientsHandler = (type) => {
            const oldCount = this.state.ingredients[type];
            if (oldCount <= 0) {
                return;
            }
            const updatedCount = oldCount - 1
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type]= updatedCount;
            const priceDeduction= INGREDIENT_PRICES[type];
            const oldPrice= this.state.totalPrice;
            const newPrice= oldPrice - priceDeduction;
            this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    
            
    }


    render () {

        const disabledInfo= {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
                 // --> {salad: true, meat: false etc.}

        return (

            <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControlers 
                        ingedientsAdded={this.addIngredientsHandler}
                        ingedientsRemoved={this.removeIngredientsHandler}
                        disabled={disabledInfo} />
            </Aux>
        )
    }
}

export default BurgerBuilder;
import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Aux';
import BuildControlers from '../../components/Burger/BuildControlers/BuildControlers';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const INGREDIENT_PRICES = {
    salad: 0.5 ,
    bacon: 1.2 ,
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
         
        totalPrice: '',
        purchasable: false,
        purchasing: false,
    }

    purchaseContinueHandler = () =>{
        alert('You continue !')
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }


    updatepurchaseState(ingredients) {
 
        const sum = Object.keys(ingredients)
            .map( igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
            this.setState({purchasable: sum > 0 });
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
        const newPrice= Number(oldPrice) + Number(priceAddition);
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatepurchaseState(updatedIngredients);
        
   
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
            const newPrice= Number(oldPrice) - Number(priceDeduction);
            this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
            this.updatepurchaseState(updatedIngredients);
            


    
            
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
                    <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelhandler}>
                        <OrderSummary 
                        ingredients={this.state.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        price={this.state.totalPrice} />
                    </Modal>
                
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControlers 
                        ingedientsAdded={this.addIngredientsHandler}
                        ingedientsRemoved={this.removeIngredientsHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler} />
            </Aux>
        )
    }
}

export default BurgerBuilder;
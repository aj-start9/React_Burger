import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import  Modal from '../../components/UI/Modal/Modal';
import  OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

// console.log(INGREDIENT_PRICE[0]);

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing:false
    }

    updatePurchaseState = (ingredients) =>{
        const ingred =
        {
           ...this.state.ingredients
        };

        const  sum = Object.keys(ingred).map(igkey=>{
            return ingredients[igkey]
          
        }).reduce((sum,el)=>{
          return sum = sum +el;
        },0)
        console.log(sum);

        this.setState({purchasable:sum>0})

    }


    addIngredienthandler = (type) => {
        const oldCount = this.state.ingredients[type];
        // console.log(this.state.ingredients['salad']);

        const updateCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredienthandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return
        }
        const updateCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateCount;
        const priceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients);
    }
     


     purchaseHandler = ()=>{
        this.setState({purchasing:true})
    }

    purchasecancelHandler=()=>{
        this.setState({purchasing:false})
    }

    purchaseContinueHandler=()=>{
        alert('you continue');
    }
     

    render() {

        const disableInfo = {
            ...this.state.ingredients
        }

        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }

        console.log(this.state.ingredients)


        return (
            <div>
                <Modal show={this.state.purchasing} modalClosed={this.purchasecancelHandler}>
                  <OrderSummary ingredients ={this.state.ingredients} price ={this.state.totalPrice}
                   purchasecancled={this.purchasecancelHandler} purchaseContinued={this.purchaseContinueHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredienthandler}
                    ingredientRemoved={this.removeIngredienthandler}
                    disable={disableInfo}
                    price={this.state.totalPrice}
                    purchasable ={this.state.purchasable}
                    orderd={this.purchaseHandler}/>
            </div>
        )
    }
}




export default BurgerBuilder;
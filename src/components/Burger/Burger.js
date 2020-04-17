import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredients from './BurgersIngredients/BurgerIngredients'

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
                    .map( igKey => {
                        return [...Array(props.ingredients[igKey])].map((_,i) => {
                            return <BurgerIngredients key={igKey+ i} type={igKey} />
                        });
                    })
                    .reduce((arr, el) =>  { /* On va passer les arr crées en 1 seul arr (arr : ancienne valeur, el: nouvelle valeur en paramètre) */ 
                    
                        return arr.concat(el) /* on les add entre elles */ 
                    }, []);

                    if (transformedIngredients.length === 0) {
                        transformedIngredients = <p>Add ingredients to your burger !</p>
                    } 

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
           {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    )
}

export default burger;
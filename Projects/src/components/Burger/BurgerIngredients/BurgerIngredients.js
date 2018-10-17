import React, { Component} from 'react'
import ProTypes from 'prop-types'
import Classes from './BurgerIngredients.css'


 class BurgerIngrdients extends Component{
    render () {
        let ingredient = null;

        switch(this.props.ingredient)
        {
            case "bread-bottom":
            {
                ingredient = <div className={Classes.BreadBottom}> </div>;
            }
            break;
    
            case "bread-top":
            {
                ingredient = (
                 <div className={Classes.BreadTop}>
                    <div className={Classes.Seeds1}></div>
                    <div className={Classes.Seeds1}></div>    
                 </div>
                );
            }
            break;
    
            case "meat":
            {
                ingredient = <div className={Classes.Meat}> </div>;
            }
            break;
    
            case "chesse":
            {
                ingredient = <div className={Classes.Chesse}> </div>;
            }
            break;
    
            case "bacon":
            {
                ingredient = <div className={Classes.Bacon}> </div>;
            }
            break;
    
            case "salad":
            {
                ingredient = <div className={Classes.Salad}> </div>;
            }
            break;
            
            default:
              ingredient = null;
    
        }
    
        return ingredient;
    }
}

BurgerIngrdients.protoTypes = {
    type: ProTypes.string.isRequired
}
export default BurgerIngrdients;

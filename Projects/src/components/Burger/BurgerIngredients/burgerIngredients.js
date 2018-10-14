import React from 'react'
import Classes from './burgerIngrdients.css'
const burgerIngrdients = (props) => {
    let ingredient = null;

    switch(props.ingredient)
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
export default burgerIngrdients;

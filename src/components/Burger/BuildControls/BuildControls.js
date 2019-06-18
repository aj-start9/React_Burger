import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},
]


const buildControls = (props)=>{
 return(   <div className = {classes.BuildControls}>
     <p>Current Price:<strong>{props.price.toFixed(2)} $</strong></p>
       {controls.map(ctrl =>
           <BuildControl  
            key={ctrl.label}
             label={ctrl.label}
             added={()=>props.ingredientAdded(ctrl.type)}
             remove ={()=>props.ingredientRemoved(ctrl.type)}
             disabled  = {props.disable[ctrl.type]}
             />
       )}
       <button className={classes.OrderButton} onClick={props.orderd} disabled ={!props.purchasable}>Order Now</button>
    </div>)
}

export default buildControls;
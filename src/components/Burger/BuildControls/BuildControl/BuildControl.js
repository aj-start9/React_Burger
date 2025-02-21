import React from 'react';
import classes from './BuildControl.css';


const buildControl = (props)=>{
    return(
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button classes={classes.Less} onClick ={props.remove}  disabled={props.disabled} >Less</button>
      <button className={classes.More} onClick={props.added}>More</button>
    </div>)
}
export default buildControl;
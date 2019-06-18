import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from'./Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from './../Navigation/SideDrawer/SideDrawer';

class Layout extends Component  {
   state =  {
           showSideDrawer:false
   }

    sideDrawerClosedhandler=()=>{
       this.setState({showSideDrawer:false})
    }

    sideDrawerClosedhandler1=()=>{
        this.setState({showSideDrawer:true})
     }
 render(){
     return(
      <Aux>
        <div>
            <Toolbar clicked ={this.sideDrawerClosedhandler1} />
             <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedhandler}/>
        </div>
        <main className={classes.Content}>{this.props.children}</main>
    </Aux>) 
 }
 
}

export default Layout;
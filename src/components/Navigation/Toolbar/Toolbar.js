import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from './../NavigationItems';  
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const toolbar =(props)=>(
<header className={classes.Toolbar}>
    <DrawerToggle click={props.clicked}  />
    <div className={classes.Logo}>
    <Logo click={props.clicked}/>

    </div>
    <nav className={classes.DesktopOnly}>
        <NavigationItems/>
    </nav>
</header>
)

export default toolbar
import React from 'react';

import Backdrop from '../../../UI/Backdrop/Backdrop'
import Aux from '../../../../hoc/Aux'
import Logo from '../../../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems';
import classes from './SideDraw.module.css';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

        console.log(attachedClasses)

    return (
        
    <Aux>
        <Backdrop show={props.open} clicked={props.closed} />
        <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
        </div> 
    </Aux>

);
    }


export default sideDrawer;

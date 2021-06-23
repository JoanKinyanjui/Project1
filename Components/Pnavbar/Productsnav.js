import React from 'react';
import {AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";
import useStyles from './styles';

function Productsnav(){
    const classes=useStyles();
    return(
        <>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6'  className={classes.title}>
                    <img src='images/best1.png' alt='homespur'  className={classes.image}/>
                    HOMESPUR
                </Typography>
                <div  className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton aria-label='Show cart items' color='inherit'>
                        <Badge badgeContent={2} color='secondary'>
                            <AddShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        </>
    )
}
export default Productsnav;
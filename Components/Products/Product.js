import React from 'react';
import {Card, CardContent, CardActions, Typography, IconButton,CardMedia} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";
import useStyles from './Style';



const Product=({product}) =>{
    const classes=useStyles();
    return(
        <Card className={classes.root}>
            < CardMedia className={classes.media} variant='top' src={product.image}/>
                <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom >{product.name}</Typography>
                    <Typography variant='h5'>{product.price}</Typography>
                </div>
                <Typography variant='body2'>{product.description}</Typography>
            </CardContent>

            <CardActions disableSpacing className={classes.cartActions}>
                <IconButton aria-label='Add to Cart'/>
                <AddShoppingCart/>
            </CardActions>
        </Card>
    )
}
export default Product;
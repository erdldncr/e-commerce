import React from 'react'
import {Card,CardMedia,CardContent,CardActions, Typography,IconButton} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/core'
import useStyles from './styles'
export default function Product({id,name,description,price}) {
    const classes=useStyles()
    return (
        <Card className={classes.root} >
            <CardMedia className={classes.media} image='' title={name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom >
                        {name}
                    </Typography>
                    <Typography variant='h5' gutterBottom >
                        {price}
                    </Typography>
                </div>
                <Typography variant='h2' color='textSecondary'>
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label='Add to Cart' >
                        <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

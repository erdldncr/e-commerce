import React from 'react'
import Grid from '@material-ui/core'
import Product from './Product'
const products=[
    {id:1,name:'Shoes',description:'Running Shoes',price:'$5'},
    {id:2,name:'Macbook',description:'Apple macbook',price:'$5'}
]
export default function Products() {
    return (
        <main>
            <Grid container justify='center' spacing={4}>
                {
                    products.map(product=>{
                        return <Grid item key={product.id} xs={12} md={6} lg={3}>
                            <Product {...product} />
                        </Grid>
                    })
                }
            </Grid>
        </main>
    )
}

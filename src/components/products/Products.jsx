import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
const products = [
    {id:1,name: "shoes",description: "Running Shoeas",price:"$5",image:"https://www.notebookcheck.biz/uploads/tx_nbc2/MacBook_Pro_14.jpg"},
    {id:2,name: "Macbook",description: "Apple Macbook",price:"$15",image:"https://i.insider.com/5d656ddd2e22af1b876e0d79?width=1000&format=jpeg&auto=webp"},
]
const Products = () => {
    return (
        <main>
            <Grid container justifyContent="center" spacing={4}>
                {
                    products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product}/>
                        </Grid>
                    ))
                }
            </Grid>
        </main>
    )
}

export default Products;
import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

type Props = {
    products: Product[]
}
export default function ProductList({ products }: Props) {
    return (
        <Grid sx={{ mt: 7, mb: 2, px: 2 }} container rowSpacing={3} columnSpacing={3}>
            {
                products.map(product => (
                    <Grid key={product.id} item xs={6} sm={4} lg={3}>
                        <ProductCard product={product}></ProductCard>
                    </Grid>
                ))
            }
        </Grid>
    )
}

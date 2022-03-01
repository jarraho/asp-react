import { Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";

type Props = {
    product: Product
}
export default function ProductCard({ product }: Props) {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'primary.dark' }}>
                        {product.brand.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{ variant: "body2", sx: { fontWeight: 'bolder', color: 'primary.dark' } }}

            />
            <CardMedia
                component="img"
                height="200"
                image={product.pictureUrl}
                alt={product.name}
                title={product.name}
                sx={{ objectFit: 'contain' }}
            />
            <CardContent>
                <Typography fontWeight="bolder" textAlign="center" gutterBottom variant="h5" color="primary.dark">
                    {(product.price / 100).toFixed(2)} EGP
                </Typography>
                <Typography fontWeight="bolder" textAlign="center" variant="body1" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions style={{ display: "flex", justifyContent: "center" }}>
                <Button sx={{ fontWeight: 'bolder' }} size="small">Add To Cart</Button>
                <Button
                    sx={{ fontWeight: 'bolder' }}
                    size="small"
                    component={Link}
                    to={`/catalog/${product.id}`}
                >View Product</Button>
            </CardActions>
        </Card>
    )
}

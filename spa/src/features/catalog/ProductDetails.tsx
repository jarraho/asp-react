import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import { Product } from '../../app/models/product';
import Grid from '@mui/material/Grid'
import { Divider, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import agent from '../../app/api/agent';
import NotFound from '../../app/errors/NotFound';
import Loader from '../../app/layout/Loader';

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        document.body.style.background = 'inherit'
        agent.Catalog.details(id!)
            .then(product => setProduct(product))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [id])
    useEffect(() => {
        return () => {
            document.body.style.background = '#e7e7e7'
        }
    }, [])
    if (loading) return (
        <Loader message='Loading Product...' />
    )
    if (!product) return (
        <NotFound />
    )
    return (
        <Grid container spacing={6} marginTop={0}>
            <Grid item xs={12} md={6}>
                <img src={product.pictureUrl} alt={product.name} />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h4" color="initial">{product.name}</Typography>
                <Divider sx={{ borderBottomWidth: 'medium', my: 2 }} variant="fullWidth" />
                <Typography fontWeight="bolder" color="primary.dark" variant="h4">
                    {(product.price / 100).toFixed(2)} EGP
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableHead>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableHead>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell>{product.type}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableHead>
                            <TableRow>
                                <TableCell>Brand</TableCell>
                                <TableCell>{product.brand}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableHead>
                            <TableRow>
                                <TableCell>In Stock</TableCell>
                                <TableCell>{product.quantityInStock}</TableCell>
                            </TableRow>
                        </TableHead>

                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}

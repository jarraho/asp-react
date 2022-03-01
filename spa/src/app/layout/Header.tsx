import { ShoppingCart } from '@mui/icons-material'
import { Badge, IconButton, List, ListItem } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import { NavLink } from 'react-router-dom'
const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' }]
const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }]
const linkStyle = {
    color: 'grey.300',
    typography: 'h6',
    '&.hover,&.active': {
        color: 'inherit'
    }
}
export default function Header() {
    return (
        <AppBar position="fixed" color="primary">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography
                    fontWeight="bolder"
                    variant="h5"
                    component={NavLink}
                    to="/"
                    sx={{ color: 'inherit', textDecoration: 'none' }}
                >
                    SOUQ
                </Typography>
                <List sx={{ display: 'flex' }}>
                    {midLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={linkStyle}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <Box display="flex" alignItems="center">
                    <IconButton size="large" sx={{ color: 'inherit' }}>
                        <Badge badgeContent={5} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <List sx={{ display: 'flex' }}>
                        {rightLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={linkStyle}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

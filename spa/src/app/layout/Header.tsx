import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
export default function Header(){
    return(
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography fontWeight="bolder" variant="h5">
              SouqApp
            </Typography>
          </Toolbar>
        </AppBar>
    )
}
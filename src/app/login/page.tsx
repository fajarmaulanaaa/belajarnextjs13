import styles from '../page.module.css'
import { Box, Typography, Button, TextField } from '@mui/material'

export default function login() {
    return (
        <div >
            <Typography variant='h3'>LOGIN</Typography>
            <Box>
                <TextField
                    label="Username"
                    variant="outlined"
                />
            </Box>
            <div>
                <TextField
                    type="password"
                    label="Password"
                    variant="outlined"
                />
            </div>
            <Button variant="contained" color="primary" >
                Login
            </Button>


        </div>
    )
}

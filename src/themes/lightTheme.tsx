import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// A custom theme for this app
export const lightTheme = createTheme({
    typography: {
        fontFamily: 'Raleway, Arial',
        h1: {
            fontSize: 60,
            fontWeight: 600
        }
    },
    palette: {
        primary: {
            main: '#960018'
        },
        secondary: {
            main: '#1560BD'
        },
        error: {
            main: red.A400
        }
    }
})

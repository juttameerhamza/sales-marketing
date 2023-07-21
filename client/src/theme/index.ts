import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#461959'
        },
        secondary: {
            main: '#7A316F'
        }
    },
    typography: {
        allVariants: {
            fontFamily: 'Montserrat'
        }
    }
});

export default theme;
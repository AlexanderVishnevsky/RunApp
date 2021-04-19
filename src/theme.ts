import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// A custom theme for this app
const theme: ThemeOptions = createMuiTheme(
    {
        palette: {
            primary: {
                main: '#7ed321',
            },
            secondary: {
                main: '#e990f9',
            },
            error: {
                main: red.A400,
            },
            background: {
                default: '#fff',
            },
        },
    },
    {
        props: {
            MuiButtonBase: {
                disableRipple: true,
            },
        },
    },
);

export default theme;

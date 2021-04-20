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
        typography: {
            fontFamily: 'SFUIText',
            fontSize: 14,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,

            h3: {
                fontFamily: 'SFUIText',
                fontSize: '36px',
                fontWeight: 'bold',
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: 'normal',
                letterSpacing: 'normal',
            },
            body1: {
                fontFamily: 'SFUIText',
                fontSize: '14px',
                fontWeight: 'normal',
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: 1.71,
                letterSpacing: 'normal',
            },
            button: {
                fontFamily: 'SFUIText',
                fontSize: '18px',
                fontWeight: 'bold',
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: 'normal',
                letterSpacing: 'normal',
            },
            subtitle1: {
                fontFamily: 'SFUIText',
                fontSize: '14px',
                fontWeight: 500,
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: 'normal',
                letterSpacing: 'normal',
            },
            subtitle2: {
                fontFamily: 'SFUIText',
                fontSize: '14px',
                fontWeight: 500,
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: 'normal',
                letterSpacing: 'normal',
                opacity: '0.6',
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

import {Components} from "@mui/material/styles/components";
import palette from "./palette";



const components: Components = {
    MuiButton: {
        defaultProps: {
            disableElevation: true
        },
        styleOverrides: {
            root: {
                textTransform: 'none',
                borderRadius: '5px',
                padding: '12px 32px',
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "13px",
                lineHeight: 0.8125,
                height: 37
            },
            containedSecondary:{
               color: palette?.primary?.main
            },
        }
    },
    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: 0
            }
        }
    },
    MuiInputBase:{},
    MuiOutlinedInput: {
        styleOverrides: {
            root:{
                padding : 0,
            },
            inputMultiline:{
                padding : '8.5px 14px'

            },
            input: {
                "&:hover":{
                    borderColor: palette?.primary?.main
                },
                background: palette?.secondary?.main,
                color: '#444444',
                border: "1px solid #EFEFEF",
                borderRadius: "5px",
               // height:'37px'
            }
        }
    },
    MuiCssBaseline: {
        styleOverrides: {
            '*': {
                boxSizing: 'border-box',
                margin: 0,
                padding: 0
            },
            html: {
                MozOsxFontSmoothing: 'grayscale',
                WebkitFontSmoothing: 'antialiased',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100%',
                width: '100%'
            },
            body: {
                display: 'flex',
                flex: '1 1 auto',
                flexDirection: 'column',
                minHeight: '100%',
                width: '100%'
            },
            '#__next': {
                display: 'flex',
                flex: '1 1 auto',
                flexDirection: 'column',
                height: '100%',
                width: '100%'
            }
        }
    }
}

export default components;
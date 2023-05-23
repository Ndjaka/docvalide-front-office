import {Palette} from "@mui/material";

const white = '#FFFFFF';
const black = '#000000';

// eslint-disable-next-line import/no-anonymous-default-export

const palette : Partial<Palette>  = {
    primary: {
    contrastText: white,
        light: '#82a6ff',
        main: '#4778e5',
        dark: '#004db2',
    },
    secondary: {
        contrastText: white,
            light: '#ffffff',
            main: '#ffffff',
            dark: '#b5b3b3',
    },
    text: {
        primary : black,
        secondary: white,
        disabled : '#FAFAFA'
    }
}
export default palette;
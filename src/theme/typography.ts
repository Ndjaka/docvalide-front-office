import {Typography} from "@mui/material/styles/createTypography";
import palette from "./palette";


// eslint-disable-next-line import/no-anonymous-default-export


const typography : Partial<Typography> = {
    htmlFontSize:16,
    h1: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: 300,
        fontSize: "6.063rem",
        lineHeight: 1.06,
        letterSpacing: "-1.5px",
        color: palette?.text?.primary
    },
    h2: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: 300,
        fontSize: "3.813rem",
        lineHeight: 3.81,
        letterSpacing: "-0.5px",
        color: palette?.text?.primary
    },
    h3: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "3rem",
        lineHeight: 1.33,
        color: palette?.text?.primary,
        // [breakpoints?.down("sm")]: {
        //     fontSize: "1.55rem",
        // }
    },
    h4: {

        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "34px",
        lineHeight: 1,
        letterSpacing: "0.25px",
        color: palette?.text?.primary,
    },
    h5: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "1.125rem",
        lineHeight: 0.66,
        color: palette?.text?.primary
    },
    h6: {

        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "1.25rem",
        lineHeight: 0.8,
        letterSpacing: "0.15px",
        color: palette?.text?.primary
    },
    subtitle1: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: 1.03,
        letterSpacing: "0.15px",
        color: palette?.text?.primary
    },
    subtitle2: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: 1.14,
        letterSpacing: "0.1px",
        color: palette?.text?.primary
    },
    body1: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "0.938rem",
        lineHeight: 1.06,
        letterSpacing: "0.5px",
        color: palette?.text?.primary
    }
    ,
    body2: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "0.813rem",
        lineHeight: 0.8125,
        letterSpacing: "0.25px",
        color: palette?.text?.primary
    },
    button:  {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "0.813rem",
        lineHeight: 0.8125,
        letterSpacing: "1.25px",
        color: palette?.text?.primary,
        textTransform: "capitalize"
    }
    ,
    caption: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "0.75rem",
        lineHeight: 0.8125,
        letterSpacing: "0.4px",
        color: palette?.text?.primary
    },
    overline: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "0.625rem",
        lineHeight: 1.6,
        letterSpacing: "1.5px",
        color: palette?.text?.primary,
        textTransform: 'initial'
    }

};
export default typography;
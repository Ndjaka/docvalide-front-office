// @flow 
import * as React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect } from "react";

type ResponsiveType =   "isMobile" | "isTablet" | "isDesktop" | "isLargeDesktop" | "isExtraLargeDesktop";

const useResponsive = (responsiveType:ResponsiveType) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isExtraLargeDesktop = useMediaQuery(theme.breakpoints.up("xl"));

  const  [device, setDevice] = React.useState<boolean>();

  const responsive = {
    "isMobile": isMobile,
    "isTablet" : isTablet,
    "isDesktop" : isDesktop,
    "isLargeDesktop" : isLargeDesktop,
    "isExtraLargeDesktop" : isExtraLargeDesktop
  }
    useEffect(() => {
      setDevice(responsive[responsiveType]);
    }, [device]);

  return device;
};

export default useResponsive;
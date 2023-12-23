import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const IsMobile = () => {
  return useMediaQuery(useTheme().breakpoints.down("sm"));
};
const IsTablet = () => {
    return useMediaQuery(useTheme().breakpoints.between("sm", "md"));
  };
  const IsWeb = () => {
    return useMediaQuery(useTheme().breakpoints.up("md"));
  };

export { IsMobile, IsTablet, IsWeb };
import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  Grid,
} from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../const/theme";
import { useMediaQuery } from "@mui/material";

const DrawerContents = ({ open, menuItems, handleItemClick }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const drawerWidth = isSmallScreen ? 100 : 220;

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
          },
        }}
        variant="persistent"
        anchor="left"
        open={!open}
      >
        <DrawerHeader />
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => handleItemClick(item.link, item.isNavigate)}
                >
                  <Grid
                    container
                    direction={isSmallScreen ? "column" : "row"}
                    alignItems="center"
                  >
                    <ListItemIcon
                      style={{
                        display: "flex",
                        justifyContent: isSmallScreen ? "center" : "flex-start",
                      }}
                    >
                      {React.cloneElement(item.icon, {
                        fontSize: isSmallScreen ? "small" : "medium",
                      })}
                    </ListItemIcon>
                    <Typography
                      sx={{
                        fontSize: isSmallScreen ? "0.6rem" : "1rem",
                        textAlign: isSmallScreen ? "center" : "left",
                        paddingTop: isSmallScreen ? 0.3 : 0.5,
                        paddingBottom: isSmallScreen ? 0.3 : 0.5,
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Grid>
                </ListItemButton>
              </ListItem>
              {index === 2 && (
                <Box my={1}>
                  <Divider />
                </Box>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </ThemeProvider>
  );
};

export default DrawerContents;

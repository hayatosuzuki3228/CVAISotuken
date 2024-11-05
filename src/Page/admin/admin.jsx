import React from "react";
import { useState, useCallback, useEffect } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { TablePagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { gray, primarycolor } from "../../const/color";
import data1 from "../../const/data.json";
import companies from "../../const/companies";
import { postData } from "../../sever/api";
import "normalize.css";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  zIndex: open ? 100 : 1,
  ...(open && {
    width: `100%`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export function Admin() {
  useEffect(() => {
    document.title = "名産会マッチングシステム・管理者画面";
  }, []);
  const navigate = useNavigate();
  const open = useState(false);
  const [flags, setFlags] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [page2, setPage2] = useState(0);
  const [rowsPerPage2, setRowsPerPage2] = useState(50);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangePage2 = (event, newPage) => setPage2(newPage);
  const handleChangeRowsPerPage2 = (event) => {
    setRowsPerPage2(parseInt(event.target.value, 10));
    setPage2(0);
  };

  const companiesRows = companies.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  const dataRows = data1.slice(
    page2 * rowsPerPage2,
    page2 * rowsPerPage2 + rowsPerPage2
  );

  //学生データ表示
  const Change0 = useCallback(() => {
    setFlags(0);
  });

  //企業データ表示
  const Change1 = useCallback(() => {
    setFlags(1);
  });

  //登録されている生徒のアカウントを無効にします
  const dataid1 = useCallback((data) => {
    console.log(data);
    postData("admin/student/deactivate", data);
  });
  //登録されている生徒のアカウントを有効にします
  const dataid2 = useCallback((data) => {
    console.log(data);
    postData("admin/student/activate", data);
  });
  //登録されている企業のアカウントを無効にします
  const companyid1 = useCallback((data) => {
    console.log(data);
    postData("admin/company/deactivate", data);
  });
  //登録されている企業のアカウントを有効にします
  const companyid2 = useCallback((data) => {
    console.log(data);
    postData("admin/company/activate", data);
  });

  const onClick = () => {
    navigate("/Addadmin");
  };

  const theme = createTheme({
    components: {
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            color: primarycolor,
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          primary: {
            color: gray,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: primarycolor,
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box />
              {flags === 0 ? (
                <Typography variant="h6" noWrap component="div">
                  名産会マッチングシステム／管理者画面・学生データ
                </Typography>
              ) : (
                <Typography variant="h6" noWrap component="div">
                  名産会マッチングシステム／管理者画面・企業データ
                </Typography>
              )}
            </Box>
          </Toolbar>
        </AppBar>
        <Main open={open} className="main">
          <DrawerHeader />
          <Drawer
            variant="permanent"
            anchor="left"
            sx={{
              width: 200,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: 200,
                boxSizing: "border-box",
              },
            }}
          >
            <List>
              <ListItem sx={{ mt: 10, justifyContent: "center" }}>
                <Button
                  style={{
                    color: flags === 0 ? primarycolor : "gray",
                  }}
                  onClick={Change0}
                >
                  学生データ
                </Button>
              </ListItem>
              <ListItem sx={{ justifyContent: "center" }}>
                <Button
                  style={{
                    color: flags === 1 ? primarycolor : "gray",
                  }}
                  onClick={Change1}
                >
                  企業データ
                </Button>
              </ListItem>
            </List>
            <Box
              display="flex"
              flexDirection="column"
              height="100vh"
              justifyContent="space-between"
            >
              <Box flexGrow={1}></Box>
              <List>
                <ListItem>
                  <ListItem sx={{ justifyContent: "center" }}>
                    <Button
                      style={{
                        color: "black",
                      }}
                      onClick={onClick}
                    >
                      管理者アカウント作成
                    </Button>
                  </ListItem>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </Main>
      </Box>

      <List sx={{ ml: 30 }}>
        {flags === 0 && (
          <>
            <Typography style={{ fontSize: "2em", textAlign: "left" }}>
              学生データ
            </Typography>
            <TablePagination
              component="div"
              count={data1.length}
              page={page2}
              onPageChange={handleChangePage2}
              rowsPerPage={rowsPerPage2}
              onRowsPerPageChange={handleChangeRowsPerPage2}
              rowsPerPageOptions={[50, 100, 200]}
              labelRowsPerPage="表示件数"
            />
            {dataRows.map((user) => (
              <Box
                key={user.id}
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "8px",
                  marginBottom: "8px",
                  marginRight: "30px",
                }}
              >
                <ListItem>
                  <ListItemText
                    primary={
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "left",
                        }}
                      >
                        <Typography variant="body1" sx={{ marginRight: 2 }}>
                          {user.id}
                        </Typography>
                        <Typography variant="body1" sx={{ marginRight: 2 }}>
                          {user.name}
                        </Typography>
                      </Box>
                    }
                  />
                  <Box display="flex" alignItems="center">
                    <Typography
                      variant="body2"
                      sx={{
                        color: user.active ? "green" : "red",
                        marginRight: 2,
                        fontWeight: user.active ? "bold" : "",
                      }}
                    >
                      {user.active ? "Active" : "Inactive"}
                    </Typography>
                    {user.active ? (
                      <Button onClick={() => dataid1(user?.id)}>停止</Button>
                    ) : (
                      <Button onClick={() => dataid2(user?.id)}>有効化</Button>
                    )}
                  </Box>
                </ListItem>
              </Box>
            ))}
          </>
        )}

        {flags === 1 && (
          <>
            <Typography style={{ fontSize: "2em", textAlign: "left" }}>
              企業データ
              <TablePagination
                component="div"
                count={companies.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[50, 100, 200]}
                labelRowsPerPage="表示件数"
              />
            </Typography>
            {companiesRows.map((company) => (
              <Box
                key={company.id}
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "8px",
                  marginBottom: "8px",
                  marginRight: "30px",
                }}
              >
                <ListItem>
                  <ListItemText
                    primary={
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "left",
                        }}
                      >
                        <Typography variant="body1" sx={{ marginRight: 2 }}>
                          {company.id}
                        </Typography>
                        <Typography variant="body1" sx={{ marginRight: 2 }}>
                          {company.name}
                        </Typography>
                      </Box>
                    }
                  />
                  <Box display="flex" alignItems="center">
                    <Typography
                      variant="body2"
                      sx={{
                        color: company.active ? "green" : "red",
                        marginRight: 2,
                        fontWeight: company.active ? "bold" : "",
                      }}
                    >
                      {company.active ? "Active" : "Inactive"}
                    </Typography>
                    {company.active ? (
                      <Button onClick={() => companyid1(company?.id)}>
                        停止
                      </Button>
                    ) : (
                      <Button onClick={() => companyid2(company?.id)}>
                        有効化
                      </Button>
                    )}
                  </Box>
                </ListItem>
              </Box>
            ))}
          </>
        )}
      </List>
    </ThemeProvider>
  );
}

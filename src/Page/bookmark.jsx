import React from "react";
import { useState, useContext } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { gray, primarycolor } from "../const/color";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import MyContext from "../provider/provider";
import { BookmarkContext } from "../provider/booktext";
import { companies } from "../const/companies";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import { TablePagination } from "@mui/material";
import { FavoriteBorder, ImportContacts } from "@mui/icons-material";
import AppBarContents from "./Component/AppBarContents";
import DrawerContents from "./Component/DrawerContents";
import MainContents from "./Component/MainContents";
import { useMediaQuery } from "@mui/material";
import "normalize.css";
import { ThemeContext } from "../provider/ThemeContext";

export function Bookmark() {
  const { isDarkMode } = useContext(ThemeContext);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const [drawerOpen, setDrawerOpen] = useState(false); // ドロワー開閉の状態
  const navigate = useNavigate();

  const handleItemClick = (link, isNavigate) => {
    if (isNavigate) {
      navigate(link);
    } else if (link) {
      window.location.href = link;
    }
  };
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

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const menuItems = [
    {
      text: "マッチング",
      icon: <ContentPasteSearchIcon />,
      link: "/Matching",
      isNavigate: true,
    },

    {
      text: "マッチ度",
      icon: <FavoriteBorder />,
      link: "/Matchdo",
      isNavigate: true,
    },
    {
      text: "ホーム",
      icon: <HomeIcon />,
      link: "/",
      isNavigate: true,
    },
    {
      text: "プロフィール",
      icon: <PersonIcon />,
      link: "/profile-st",
      isNavigate: true,
    },
    {
      text: "設定",
      icon: <SettingsIcon />,
      link: "/Setting",
      isNavigate: true,
    },
  ];

  const { bookmarks, removeBookmark } = useContext(BookmarkContext);

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

  const [open1, setOpen1] = useState(false);
  const [removeid, setRemoveid] = useState();
  const [removename, setRemovename] = useState();

  const handleClickOpen = (id) => {
    setOpen1(true);
    setRemoveid(id);
  };

  const handleClose = () => {
    setOpen1(false);
  };

  const handleConfirmDelete = () => {
    console.log("bookmarks", bookmarks);

    removeBookmark(removeid);

    console.log(removename + "を削除しました");

    handleClose();
  };

  const { providerid, setproviderid } = useContext(MyContext);

  console.log("bookmark", setproviderid);
  const handleCompanyChange = (event, item) => {
    setproviderid(item), navigate("/companyinformation", console.log(item));
  };

  const buttonStyle = {
    backgroundColor: "white",
    color: "white",
    cursor: "pointer",
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const bookmarksRows = bookmarks.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <a>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <AppBarContents
            apptitle={"文字を入力してください"}
            open={drawerOpen}
            setOpen={setDrawerOpen}
          />

          <DrawerContents
            open={drawerOpen}
            menuItems={menuItems}
            handleItemClick={handleItemClick}
          />
          <MainContents open={drawerOpen}>
            <DrawerHeader />
          </MainContents>
        </Box>
      </ThemeProvider>
      <Main>
        <TablePagination
          component="div"
          count={bookmarks.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[50, 100, 200]}
          labelRowsPerPage="表示件数"
        />
        <Stack
          direction="row"
          width="84%"
          flexWrap="wrap"
          sx={{ marginLeft: 36 }}
        >
          {bookmarks && bookmarks.length > 0 ? (
            bookmarksRows.map((item, index) => {
              const company = companies.find((company) => company.id === item);
              return (
                <Typography key={item}>
                  <Box p={1}>
                    <Card sx={{ width: 180 }} key={company?.id}>
                      <CardMedia
                        sx={{ height: 130 }}
                        image="../../src/assets/icon.png"
                        onClick={(event) => handleCompanyChange(event, item)}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          sx={{
                            display: "-webkit-box",
                            overflow: "hidden",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2,
                            textOverflow: "ellipsis",
                            height: 60,
                          }}
                          onClick={(event) => handleCompanyChange(event, item)}
                        >
                          {company?.name}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          onClick={() => handleClickOpen(item)}
                        >
                          <IconButton
                            size="small"
                            aria-label="delete"
                            onClick={() => setRemovename(company?.name)}
                          >
                            <DeleteIcon
                              sx={{
                                fontSize: 20,
                                color: isDarkMode ? "white" : "black",
                              }}
                            />
                          </IconButton>
                        </Button>
                        {company.website == "" ? (
                          "HP情報なし"
                        ) : (
                          <Button
                            size="medium"
                            href={company.website}
                            target="_blank"
                          >
                            HP
                          </Button>
                        )}
                      </CardActions>
                    </Card>
                  </Box>
                </Typography>
              );
            })
          ) : (
            <Typography
              style={{ fontSize: "2em", textAlign: "left" }}
              sx={{ mx: 4 }}
            >
              ブックマークが登録されていません
            </Typography>
          )}
        </Stack>
        <Dialog
          open={open1}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">削除の確認</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              このブックマークを削除してもよろしいですか？<p></p>・{removename}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              キャンセル
            </Button>
            <Button onClick={handleConfirmDelete} color="primary" autoFocus>
              削除
            </Button>
          </DialogActions>
        </Dialog>
      </Main>
    </a>
  );
}

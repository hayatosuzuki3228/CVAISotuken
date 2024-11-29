import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../../../provider/blogcontext";
import { Box, Typography, Divider, Grid, Button } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import UndoIcon from "@mui/icons-material/Undo";

function BlogDetail() {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const navigate = useNavigate();
  const blog = blogs[id]; // idに対応するブログ記事を取得

  if (!blog) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        textAlign="center"
      >
        <WarningIcon color="error" sx={{ fontSize: "50px" }} />
        <Typography variant="h5">ページが見つかりません</Typography>
        <Button
          className="back"
          variant="text"
          color="secondary"
          onClick={() => navigate("/Blog")}
          startIcon={<UndoIcon />}
        >
          戻る
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      {blog.image && (
        <Box
          component="img"
          src={URL.createObjectURL(blog.image)}
          alt="ブログ画像"
          sx={{
            width: {
              xs: "70%",
              md: "50%",
            },
            height: {
              xs: "30vh",
              sm: "30vh",
              md: "50vh",
            },
            paddingLeft: {
              xs: "15%",
              md: "25%",
            },
            paddingRight: {
              xs: "15%",
              md: "25%",
            },
            objectFit: "contain",
            mb: 2,
          }}
        />
      )}
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        paddingInline={3}
        paddingTop={3}
      >
        <Grid item>
          <Typography variant="h4">{blog.title}</Typography>
        </Grid>
        <Grid item>
          <Button
            className="back"
            variant="text"
            color="secondary"
            onClick={() => navigate("/Blog")}
            startIcon={<UndoIcon />}
          >
            戻る
          </Button>
        </Grid>
      </Grid>
      <Divider sx={{ my: 2, borderWidth: "1px" }} />
      <Box
        sx={{ paddingInline: "50px", marginBottom: "5%" }}
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </Box>
  );
}

export default BlogDetail;

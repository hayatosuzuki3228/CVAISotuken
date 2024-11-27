import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../../../provider/blogcontext";
import { Box, Typography, Divider } from "@mui/material";

function BlogDetail() {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);

  const blog = blogs[id]; // idに対応するブログ記事を取得

  if (!blog) {
    return <Typography variant="h6">ブログが見つかりませんでした</Typography>;
  }

  return (
    <Box>
      {blog.image && (
        <Box
          component="img"
          src={URL.createObjectURL(blog.image)}
          alt="ブログ画像"
          sx={{
            width: "50%",
            paddingLeft: "25%",
            paddingRight: "25%",
            objectFit: "contain",
            mb: 2,
          }}
        />
      )}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ paddingLeft: "15%", paddingRight: "15%" }}
      >
        {blog.title}
      </Typography>
      <Divider sx={{ my: 2, borderWidth: "1px" }} />
      <Typography
        variant="body1"
        sx={{ paddingLeft: "17%", paddingRight: "17%", marginBottom: "5%" }}
      >
        {blog.content}
      </Typography>
    </Box>
  );
}

export default BlogDetail;

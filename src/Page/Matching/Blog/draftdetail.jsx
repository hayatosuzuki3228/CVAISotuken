import React from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../../../provider/blogcontext";
import { Box, Typography, Divider } from "@mui/material";

export function DraftDetail() {
  const { id } = useParams(); // URLから下書きIDを取得
  const { drafts } = React.useContext(BlogContext);
  const draft = drafts[parseInt(id)];

  if (!draft) {
    return <Typography>該当する下書きが見つかりません。</Typography>;
  }

  return (
    <Box>
      {draft.image && (
        <Box
          component="img"
          src={URL.createObjectURL(draft.image)}
          alt="下書き画像"
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
        {draft.title}
      </Typography>
      <Divider sx={{ my: 2, borderWidth: "1px" }} />
      <Typography
        variant="body1"
        sx={{ paddingLeft: "17%", paddingRight: "17%", marginBottom: "5%" }}
      >
        {draft.content}
      </Typography>
    </Box>
  );
}

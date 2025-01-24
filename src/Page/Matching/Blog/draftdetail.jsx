import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../../../provider/blogcontext";
import { Box, Typography, Divider, Grid, Button } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import UndoIcon from "@mui/icons-material/Undo";

export function DraftDetail() {
  const { id } = useParams(); // URLから下書きIDを取得
  const { drafts } = React.useContext(BlogContext);
  const navigate = useNavigate();
  const draft = drafts[parseInt(id)];
  console.log("画像", draft.image);

  if (!draft) {
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
    <a>
      <Box>
        {draft.image && (
          <Box
            component="img"
            src={URL.createObjectURL(draft.image)}
            alt="ブログ画像"
            sx={{
              width: {
                xs: "70%",
                md: "50%",
              },
              display: "block", // ブロック要素として扱う
              margin: "0 auto",
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
            <Typography variant="h4">{draft.title}</Typography>
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
          sx={{
            "& img": {
              maxWidth: "100%", // 画像の幅を親要素に合わせる
              height: "auto", // アスペクト比を保持
              objectFit: "contain", // 画像全体を収める
              margin: "10px 0", // 画像上下の余白
            },
            paddingInline: "50px",
            marginBottom: "5%",
          }}
          dangerouslySetInnerHTML={{ __html: draft.content }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",

            marginRight: "10px",
          }}
        >
          <Typography variant="h7" color="text.secondary" gutterBottom>
            ○○株式会社
          </Typography>
        </Box>
      </Box>
    </a>
  );
}

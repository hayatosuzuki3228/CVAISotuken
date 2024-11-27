import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  BlogContext } from "../../../provider/blogcontext";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Typography,
  SpeedDial,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Button,
  Modal,
} from "@mui/material";
import { Home, Drafts, Settings, Add } from "@mui/icons-material";
import Masonry from "@mui/lab/Masonry";

export function Blog({ isLoggedIn = true, accountType = "company" }) {
  const { blogs, drafts, myBlogs,addDraft, removeDraft, publishDraft } =
    useContext(BlogContext);
  const [currentTab, setCurrentTab] = useState(0);
  const [draftContent, setDraftContent] = useState({
    title: "",
    content: "",
    image: null,
  });
  const [isDraftModalOpen, setDraftModalOpen] = useState(false);

  if (!isLoggedIn) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h6">ログインしてください</Typography>
      </Box>
    );
  }

  const handleDraftSave = () => {
    if (draftContent.title && draftContent.content) {
      addDraft(draftContent);
      setDraftContent({ title: "", content: "", image: null });
      setDraftModalOpen(false);
    } else {
      alert("タイトルと本文を入力してください！"); // 入力不足時のアラートは残します
    }
  };

  const handleDraftPublish = (index) => {
    const userConfirmed = window.confirm("この下書きを公開しますか？");
    if (userConfirmed) {
      publishDraft(index);
    }
  };

  const renderCards = (data, isDraft = false) => {
    const navigate = useNavigate();
  
    return (
      <Masonry columns={5} spacing={2}>
        {data.map((item, index) => (
          <Box key={index}>
            {/* クリックで詳細ページに遷移 */}
            <Card
              onClick={() => navigate(isDraft ? `/draft/${index}` : `/blog/${index}`)}
              sx={{ cursor: "pointer" }}
            >
              {item.image && (
                <CardMedia
                  component="img"
                  height="140"
                  image={URL.createObjectURL(item.image)}
                  alt={`${isDraft ? "下書き" : "ブログ"}の画像`}
                />
              )}
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {item.content}
                </Typography>
                {isDraft && (
                  <Box mt={2} display="flex" gap={1}>
                    {/* ボタンのクリックイベントで詳細遷移を防ぐ */}
                    <Button
                       variant="contained"
                       color="primary"
                       onClick={(e) => {
                       e.stopPropagation(); // 詳細ページ遷移を防ぐ
                       handleDraftPublish(index); // 確認ダイアログのみ表示
                    }}
                  >
                    公開
                 </Button>

                    <Button
                      variant="outlined"
                      color="error"
                      onClick={(e) => {
                        e.stopPropagation(); // 詳細ページ遷移を防ぐ
                        removeDraft(index);
                      }}
                    >
                      破棄
                    </Button>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Box>
        ))}
      </Masonry>
    );
  };
  
  

  const renderContent = () => {
    if (accountType === "student") {
      return (
        <Box>
          <Typography variant="h4" gutterBottom>
            ブログを見る
          </Typography>
          {renderCards(blogs)}
        </Box>
      );
    }

    // 企業アカウント向けの処理
    switch (currentTab) {
      case 0:
        return (
          <Box>
            <Typography variant="h4" gutterBottom>
              ブログを見る
            </Typography>
            {renderCards(blogs)}
          </Box>
        );
      case 1:
        return (
          <Box>
            <Typography variant="h4" gutterBottom>
              下書き一覧
            </Typography>
            {renderCards(drafts, true)}
            <SpeedDial
              ariaLabel="下書き作成"
              sx={{ position: "absolute", bottom: 70, right: 16 }}
              icon={<Add />}
              onClick={() => setDraftModalOpen(true)} // モーダルを開く
            />
          </Box>
        );
     
        case 2:
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        公開したブログ
      </Typography>
      {renderCards(myBlogs)}
    </Box>
  );
        default:
          return null;
    }
  };

  return (
    <Box>
      <Box>{renderContent()}</Box>
      <Modal
        open={isDraftModalOpen}
        onClose={() => setDraftModalOpen(false)}
        aria-labelledby="下書き作成"
        aria-describedby="新しい下書きを作成します"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" gutterBottom>
            下書きを作成
          </Typography>
          <TextField
            fullWidth
            label="タイトル"
            variant="outlined"
            margin="normal"
            value={draftContent.title}
            onChange={(e) =>
              setDraftContent({ ...draftContent, title: e.target.value })
            }
          />
          <TextField
            fullWidth
            label="本文"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            value={draftContent.content}
            onChange={(e) =>
              setDraftContent({ ...draftContent, content: e.target.value })
            }
          />
          <Button variant="contained" component="label" sx={{ marginTop: 2 }}>
            画像をアップロード
            <input
              type="file"
              hidden
              onChange={(e) =>
                setDraftContent({ ...draftContent, image: e.target.files[0] })
              }
            />
          </Button>
          <Box mt={2} display="flex" gap={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleDraftSave}
            >
              保存
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                setDraftContent({ title: "", content: "", image: null });
                setDraftModalOpen(false);
              }}
            >
              破棄
            </Button>
          </Box>
        </Box>
      </Modal>
      {accountType !== "student" && (
        <BottomNavigation
          value={currentTab}
          onChange={(_, newValue) => setCurrentTab(newValue)}
          showLabels
          sx={{ width: "100%", position: "fixed", bottom: 0,backgroundColor:"#deefff" }}
        >
          <BottomNavigationAction label="ブログ" icon={<Home />} />
          <BottomNavigationAction label="下書き" icon={<Drafts />} />
          <BottomNavigationAction label="管理" icon={<Settings />} />
        </BottomNavigation>
      )}
    </Box>
  );
}

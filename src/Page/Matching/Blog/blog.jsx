import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../../../provider/blogcontext";
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
  Divider,
  Grid,
} from "@mui/material";
import { Home, Drafts, Settings, Add } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import WarningIcon from "@mui/icons-material/Warning";
import UndoIcon from "@mui/icons-material/Undo";
import Masonry from "@mui/lab/Masonry";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export function Blog({ isLoggedIn = true, accountType = "company" }) {
  const {
    blogs,
    drafts,
    myBlogs,
    addDraft,
    editDraft,
    removeBlog,
    removeDraft,
    publishDraft,
  } = useContext(BlogContext);
  const [currentTab, setCurrentTab] = useState(0);
  const [draftContent, setDraftContent] = useState({
    title: "",
    content: "",
    image: null,
  });
  const [editingDraftIndex, setEditingDraftIndex] = useState(null);
  const [isDraftModalOpen, setDraftModalOpen] = useState(false);
  const navigate = useNavigate();

  if (!isLoggedIn) {
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
        <Typography variant="h5">ログインをしていません</Typography>
        <Button
          className="back"
          variant="text"
          color="secondary"
          onClick={() => navigate("/matching")}
          startIcon={<UndoIcon />}
        >
          戻る
        </Button>
      </Box>
    );
  }

  const handleDraftSave = () => {
    if (draftContent.title && draftContent.content) {
      if (editingDraftIndex !== null) {
        // 編集の場合
        editDraft(editingDraftIndex, draftContent);
      } else {
        // 新規の場合
        addDraft(draftContent);
      }
      setDraftContent({ title: "", content: "", image: null });
      setEditingDraftIndex(null); // 編集状態をリセット
      setDraftModalOpen(false);
    } else {
      alert("タイトルと本文を入力してください！");
    }
  };

  const handleEditDraft = (index) => {
    setEditingDraftIndex(index);
    setDraftContent(drafts[index]); // 編集対象の内容をセット
    setDraftModalOpen(true);
  };

  const handleDraftPublish = (index) => {
    const userConfirmed = window.confirm("この下書きを公開しますか？");
    if (userConfirmed) {
      publishDraft(index);
    }
  };
  const Draftremove = (index) => {
    const userConfirmed2 = window.confirm("この下書きを破棄しますか？");
    if (userConfirmed2) {
      removeDraft(index);
    }
  };
  const Blogremove = (index) => {
    const userConfirmed3 = window.confirm("このブログを削除しますか？");
    if (userConfirmed3) {
      removeBlog(index);
    }
  };

  const renderCards = (data, isDraft = false, isManagement = false) => {
    return (
      <Masonry
        columns={{
          xs: 2, // スマートフォン: 2列
          sm: 2, // 小型画面: 2列
          md: 3, // 中型画面: 3列
          lg: 4, // 大型画面: 4列
          xl: 5, // 超大型画面: 5列
        }}
        spacing={2}
      >
        {data.map((item, index) => (
          <Box key={index}>
            {/* クリックで詳細ページに遷移 */}
            <Card
              onClick={() =>
                navigate(isDraft ? `/draft/${index}` : `/blog/${index}`)
              }
              sx={{
                cursor: "pointer",
              }}
            >
              {item.image && (
                <CardMedia
                  component="img"
                  height={{ xs: "100", md: "120" }}
                  image={URL.createObjectURL(item.image)}
                  alt={`${isDraft ? "下書き" : "ブログ"}の画像`}
                />
              )}
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                {/* リッチテキストをレンダリング */}
                <div
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2, // 行数制限
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    height: "3em",
                    paddingBottom: 5,
                  }}
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></div>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    height: "5vh",
                    marginRight: "10px",
                  }}
                >
                  <Typography variant="h9" color="text.secondary">
                    ○○株式会社
                  </Typography>
                </Box>
                {/* 管理画面で削除ボタンを表示 */}
                {isManagement && accountType === "company" && (
                  <Box mt={2} display="flex" gap={1}>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={(e) => {
                        e.stopPropagation();
                        Blogremove(index); // ブログ削除
                      }}
                    >
                      削除
                    </Button>
                  </Box>
                )}
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
                      variant="contained"
                      color="inherit"
                      startIcon={<EditIcon />}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditDraft(index); // 編集モーダルを開く
                      }}
                    >
                      編集
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={(e) => {
                        e.stopPropagation(); // 詳細ページ遷移を防ぐ
                        Draftremove(index);
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
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            paddingInline={2}
          >
            <Grid item>
              <Typography
                variant="h4"
                sx={{
                  fontStyle: "italic",
                  fontFamily: "'Merriweather', serif",
                  fontSize: "50px",
                  fontWeight: "light",
                  fontWeight: "bold",
                  letterSpacing: "0.1em", // 文字間隔
                  lineHeight: 1.5, // 行間
                  color: "#469", // テーマの色を使用
                  textTransform: "uppercase", // 英字を大文字に変換
                }}
              >
                Blog
              </Typography>
            </Grid>
            <Grid item>
              <Button
                className="back"
                variant="text"
                color="secondary"
                onClick={() => navigate("/matching")}
                startIcon={<UndoIcon />}
              >
                戻る
              </Button>
            </Grid>
          </Grid>
          <Divider sx={{ my: 0.1, borderWidth: "1px" }} />
          <Typography variant="h5" sx={{ paddingLeft: "20px" }} gutterBottom>
            ブログ一覧
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
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              paddingInline={2}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  sx={{
                    fontStyle: "italic",
                    fontFamily: "'Merriweather', serif",
                    fontSize: "50px",
                    fontWeight: "light",
                    fontWeight: "bold",
                    letterSpacing: "0.1em", // 文字間隔
                    lineHeight: 1.5, // 行間
                    color: "#469", // テーマの色を使用
                    textTransform: "uppercase", // 英字を大文字に変換
                  }}
                >
                  Blog
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  className="back"
                  variant="text"
                  color="secondary"
                  onClick={() => navigate("/matching")}
                  startIcon={<UndoIcon />}
                >
                  戻る
                </Button>
              </Grid>
            </Grid>
            <Divider sx={{ my: 0.1, borderWidth: "1px" }} />
            <Typography variant="h5" sx={{ paddingLeft: "20px" }} gutterBottom>
              ブログ一覧
            </Typography>
            {renderCards(blogs)}
          </Box>
        );
      case 1:
        return (
          <Box>
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              paddingInline={2}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  sx={{
                    fontStyle: "italic",
                    fontFamily: "'Merriweather', serif",
                    fontSize: "50px",
                    fontWeight: "light",
                    fontWeight: "bold",
                    letterSpacing: "0.1em", // 文字間隔
                    lineHeight: 1.5, // 行間
                    color: "#469", // テーマの色を使用
                    textTransform: "uppercase", // 英字を大文字に変換
                  }}
                >
                  Blog
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  className="back"
                  variant="text"
                  color="secondary"
                  onClick={() => navigate("/matching")}
                  startIcon={<UndoIcon />}
                >
                  戻る
                </Button>
              </Grid>
            </Grid>
            <Divider sx={{ my: 0.1, borderWidth: "1px" }} />
            <Typography variant="h5" sx={{ paddingLeft: "20px" }} gutterBottom>
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
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              paddingInline={2}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  sx={{
                    fontStyle: "italic",
                    fontFamily: "'Merriweather', serif",
                    fontSize: "50px",
                    fontWeight: "light",
                    fontWeight: "bold",
                    letterSpacing: "0.1em", // 文字間隔
                    lineHeight: 1.5, // 行間
                    color: "#469", // テーマの色を使用
                    textTransform: "uppercase", // 英字を大文字に変換
                  }}
                >
                  Blog
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  className="back"
                  variant="text"
                  color="secondary"
                  onClick={() => navigate("/matching")}
                  startIcon={<UndoIcon />}
                >
                  戻る
                </Button>
              </Grid>
            </Grid>
            <Divider sx={{ my: 0.1, borderWidth: "1px" }} />
            <Typography variant="h5" sx={{ paddingLeft: "20px" }} gutterBottom>
              公開したブログ
            </Typography>
            {renderCards(myBlogs, false, true)}
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
            width: "80vw", // モーダルを広げる
            maxWidth: 800, // 最大幅を設定
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" gutterBottom>
            下書き
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            会社名:○○株式会社
          </Typography>
          {/* 画像プレビュー */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 0.2,
              height: 100,
            }}
          >
            {draftContent.image ? (
              <img
                src={URL.createObjectURL(draftContent.image)}
                alt="アップロードされた画像"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            ) : (
              <Typography variant="body2" color="text.secondary">
                アップロードされた画像が表示されます
              </Typography>
            )}
          </Box>
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
          <ReactQuill
            value={draftContent.content}
            onChange={(value) =>
              setDraftContent({ ...draftContent, content: value })
            }
            theme="snow"
            style={{
              height: "300px", // エディタの高さ
              marginBottom: "20px",
            }}
          />

          {/* アップロードボタン */}
          <Button variant="contained" component="label" sx={{ marginTop: 5 }}>
            画像をアップロード
            <input
              type="file"
              hidden
              accept="image/*" // 画像ファイルのみを許可
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setDraftContent({
                    ...draftContent,
                    image: e.target.files[0],
                  });
                }
              }}
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
                setEditingDraftIndex(null); // 編集状態をリセット
                setDraftModalOpen(false);
              }}
            >
              キャンセル
            </Button>
          </Box>
        </Box>
      </Modal>
      {accountType !== "student" && (
        <BottomNavigation
          value={currentTab}
          onChange={(_, newValue) => setCurrentTab(newValue)}
          showLabels
          sx={{
            width: "100%",
            position: "fixed",
            bottom: 0,
            backgroundColor: "#deefff",
          }}
        >
          <BottomNavigationAction label="ブログ" icon={<Home />} />
          <BottomNavigationAction label="下書き" icon={<Drafts />} />
          <BottomNavigationAction label="管理" icon={<Settings />} />
        </BottomNavigation>
      )}
    </Box>
  );
}

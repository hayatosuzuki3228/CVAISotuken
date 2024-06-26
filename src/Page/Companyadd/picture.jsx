import { Typography, Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

export function Picture() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [zoom, setZoom] = useState(1);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }

    setImage(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
      setZoom(1);
    };
    reader.readAsDataURL(file);
  };

  const handleZoomIn = () => {
    setZoom((prevZoom) => prevZoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(0.1, prevZoom - 0.1));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        mt: "10vh",
        gap: 2,
      }}
    >
      <Typography variant="h5">画像のアップロード（任意）</Typography>
      <Typography variant="body1">
        企業一覧に表示する画像として使用します
        <br />
        プロフィールで変更することも可能です
      </Typography>
      <Typography variant="body2" color="textSecondary">
        画像ファイル（.jpg, .jpeg, .png）のみアップロードできます
      </Typography>
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={handleImageChange}
      />

      {previewUrl && (
        <Box
          sx={{
            border: "2px solid black",
            padding: "10px",
            width: 300,
            height: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <IconButton
            onClick={handleZoomIn}
            disabled={zoom >= 2}
            style={{ position: "absolute", top: -30, left: -30, zIndex: 1 }}
          >
            <ZoomInIcon />
          </IconButton>
          <IconButton
            onClick={handleZoomOut}
            disabled={zoom <= 0.1}
            style={{ position: "absolute", top: -30, right: -30, zIndex: 1 }}
          >
            <ZoomOutIcon />
          </IconButton>
          <div
            style={{
              width: `calc(100% * ${zoom})`,
              height: `calc(100% * ${zoom})`,
              overflow: "visible",
              position: "relative",
            }}
          >
            <img
              src={previewUrl}
              alt="Preview"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </Box>
      )}
    </Box>
  );
}

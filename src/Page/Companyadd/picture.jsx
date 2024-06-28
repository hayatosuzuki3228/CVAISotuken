import { Typography, Box, IconButton, Button } from "@mui/material";
import React, { useState, useRef } from "react";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ArrowDropupIcon from "@mui/icons-material/ArrowDropup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export function Picture() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [previousPosition, setPreviousPosition] = useState({ x: 0, y: 0 });

  const containerRef = useRef(null);
  const imageRef = useRef(null);

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
      setPositionX(0);
      setPositionY(0);
      setPreviousPosition({ x: 0, y: 0 });
    };
    reader.readAsDataURL(file);
  };

  //#region  画像調整
  const handleZoomIn = () => {
    setZoom((prevZoom) => prevZoom + 0.1);
    setPositionX((prevX) => prevX - (previousPosition.x * 0.1) / zoom);
    setPositionY((prevY) => prevY - (previousPosition.y * 0.1) / zoom);
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(0.5, prevZoom - 0.1));
    setPositionX((prevX) => prevX + (previousPosition.x * 0.1) / zoom);
    setPositionY((prevY) => prevY + (previousPosition.y * 0.1) / zoom);
  };

  const handleMoveUp = () => {
    setPositionY((prevY) => {
      setPreviousPosition((prevPos) => ({ ...prevPos, y: prevPos.y - 10 }));
      return prevY - 10;
    });
  };

  const handleMoveDown = () => {
    setPositionY((prevY) => {
      setPreviousPosition((prevPos) => ({ ...prevPos, y: prevPos.y + 10 }));
      return prevY + 10;
    });
  };

  const handleMoveLeft = () => {
    setPositionX((prevX) => {
      setPreviousPosition((prevPos) => ({ ...prevPos, x: prevPos.x - 10 }));
      return prevX - 10;
    });
  };

  const handleMoveRight = () => {
    setPositionX((prevX) => {
      setPreviousPosition((prevPos) => ({ ...prevPos, x: prevPos.x + 10 }));
      return prevX + 10;
    });
  };
  //#endregion

  const handleUpload = () => {
    if (!previewUrl) {
      return;
    }

    // Canvas を作成して画像を描画
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.onload = () => {
      canvas.width = 300; // 枠の幅
      canvas.height = 300; // 枠の高さ
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // 画像を保存する
      const dataUrl = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "saved_image.png";
      a.click();
    };
    img.src = previewUrl;
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
          ref={containerRef}
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
            onClick={handleMoveUp}
            style={{
              position: "absolute",
              top: 10,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1,
            }}
          >
            <ArrowDropupIcon />
          </IconButton>
          <IconButton
            onClick={handleMoveDown}
            style={{
              position: "absolute",
              bottom: 10,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1,
            }}
          >
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton
            onClick={handleMoveLeft}
            style={{
              position: "absolute",
              top: "50%",
              left: 10,
              transform: "translateY(-50%)",
              zIndex: 1,
            }}
          >
            <ArrowLeftIcon />
          </IconButton>
          <IconButton
            onClick={handleMoveRight}
            style={{
              position: "absolute",
              top: "50%",
              right: 10,
              transform: "translateY(-50%)",
              zIndex: 1,
            }}
          >
            <ArrowRightIcon />
          </IconButton>
          <IconButton
            onClick={handleZoomIn}
            disabled={zoom >= 2}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 2,
            }}
          >
            <ZoomInIcon />
          </IconButton>
          <IconButton
            onClick={handleZoomOut}
            disabled={zoom <= 0.5}
            style={{
              position: "absolute",
              top: 40,
              right: 10,
              zIndex: 2,
            }}
          >
            <ZoomOutIcon />
          </IconButton>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transformOrigin: "center",
              transform: `scale(${zoom}) translate(${positionX}px, ${positionY}px)`,
            }}
          >
            <img
              ref={imageRef}
              src={previewUrl}
              alt="Preview"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </Box>
      )}
      <Button variant="contained" color="primary" onClick={handleUpload}>
        アップロード
      </Button>
    </Box>
  );
}

import React, { useState, useRef } from "react";

export const useImage = () => {
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
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(0.5, prevZoom - 0.1));
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

  //#region 画像up

  const handleUpload = () => {
    if (!previewUrl) {
      return;
    }

    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.onload = () => {
      canvas.width = containerWidth;
      canvas.height = containerHeight;

      const scaledWidth = img.width * zoom;
      const scaledHeight = img.height * zoom;

      const drawX = (containerWidth - scaledWidth) / 2 + positionX;
      const drawY = (containerHeight - scaledHeight) / 2 + positionY;

      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        drawX,
        drawY,
        scaledWidth,
        scaledHeight
      );

      const dataUrl = canvas.toDataURL("image/png");
      const fileName = `${name}.png`;
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = fileName;
      a.click();
    };
    img.src = previewUrl;
  };
  //#endregion

  return {
    image,
    previewUrl,
    zoom,
    positionX,
    positionY,
    previousPosition,
    containerRef,
    imageRef,
    handleImageChange,
    handleZoomIn,
    handleZoomOut,
    handleMoveUp,
    handleMoveDown,
    handleMoveLeft,
    handleMoveRight,
    handleUpload,
  };
};

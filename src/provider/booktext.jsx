import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// コンテキストを作成
export const BookmarkContext = createContext();

// プロバイダコンポーネント

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (id) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, id]);
  };

  const removeBookmark = (id) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.filter((bookmark) => bookmark !== id)
    );
  };

  useEffect(() => {
    localStorage.setItem("bookmark", JSON.stringify(bookmarks));
  }, [bookmarks]);
  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

BookmarkProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

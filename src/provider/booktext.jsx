import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

// コンテキストを作成
export const BookmarkContext = createContext();

// プロバイダコンポーネント

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (id) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, id]);
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

BookmarkProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

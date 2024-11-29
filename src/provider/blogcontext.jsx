import React, { createContext, useState } from "react";

// Blog Context
export const BlogContext = createContext();

// Blog Provider
export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]); // Published blogs
  const [drafts, setDrafts] = useState([]); // Drafts

  const currentUserId = "user123"; // 仮の現在のユーザーID（実際には認証情報から取得）

  // Add a new draft
  const addDraft = (draft) => setDrafts([...drafts, draft]);

  const removeBlog = (index) => setBlogs(blogs.filter((_, i) => i !== index));
  // Remove a draft
  const removeDraft = (index) =>
    setDrafts(drafts.filter((_, i) => i !== index));

  const editDraft = (index, updatedDraft) => {
    setDrafts((prevDrafts) =>
      prevDrafts.map((draft, i) => (i === index ? updatedDraft : draft))
    );
  };

  // Publish a draft
  const publishDraft = (index) => {
    const draftToPublish = { ...drafts[index], authorId: currentUserId };
    setBlogs([...blogs, draftToPublish]);
    removeDraft(index);
  };

  // Filter blogs by the current user's ID
  const myBlogs = blogs.filter((blog) => blog.authorId === currentUserId);

  return (
    <BlogContext.Provider
      value={{
        blogs,
        drafts,
        addDraft,
        editDraft,
        removeBlog,
        removeDraft,
        publishDraft,
        myBlogs, // 自分のブログを追加
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

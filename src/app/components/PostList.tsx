"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import  CommentCreate  from "./CommentCreate";
import CommentList from "./CommentList";

interface Post {
  comments: string[];
  id: string;
  title: string;
  content: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Record<string, Post>>({});

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:4002/posts");
      console.log("response", response.data); 
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post: Post) => {
    return (
      <div
        className="card"
        key={post.id}
        style={{ width: "30%", marginBottom: "10px" }}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
          
        </div>
      </div>
    );
  });

  return <div className="d-flex flex-wrap flex-row justify-content-between"> {renderedPosts} </div>;
};

export default PostList;

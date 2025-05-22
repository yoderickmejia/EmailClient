import React from "react";

const CommentList: React.FC<{ comments: Array<string> }> = ({ comments }) => {
  console.log("comments", comments);
  const renderedComments = comments.map((comment: any) => {
    let content 

    if (comment.status === "approved") {
      content = comment.content;
    }
    if (comment.status === "pending") {
      content = "This comment is awaiting moderation";

    }
    if (comment.status === "rejected") {
        content = "This comment has been rejected";
    }
    
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;

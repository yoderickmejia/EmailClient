import React from "react";

const CommentList: React.FC<{ comments: Array<string> }> = ({ comments }) => {
 
  console.log("comments", comments)
  const renderedComments = comments.map((comment: any) => {
    return <li key={comment.id}>{comment.content}</li>
    })


    return (
        <ul>
            {renderedComments}
        </ul>
    )
};


export default CommentList;
import react from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const CommentList: React.FC<{ postId: string }> = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/posts/${postId}/comments`
      );
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
   
  };

  useEffect(() => {
    fetchData();
  }, []);

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
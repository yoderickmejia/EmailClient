"use client";

import React, { useState } from "react";
import axios from "axios";




const CommentCreate: React.FC<{ postId: string }> = ({ postId }) => {   
   
    const [content, setContent] = useState("");
    const onSubmit = async  (e: React.FormEvent, postId: string, content: string) => {   
        e.preventDefault(); // Prevent the default form submission behavior
    
        try {
            await axios.post(`http://localhost:4001/posts/${postId}/comments`, { content });
            console.log("Comment submitted successfully");
        } catch (error) {
            console.error("Error submitting comment:", error);
        }
        setContent(""); // Clear the input field after submission  
    }
   
   
    return (
        <div>
            <form onSubmit={(e) => onSubmit(e, postId, content)}>
                <div className="form-group">    
                    <label >New Comment</label>
                    <input  value={content} onChange={e => setContent(e.target.value)} className="form-control"  />
                </div>
                <button className="btn btn-primary ">Submit</button>
            </form>
        </div>
    )
}


export default CommentCreate;   
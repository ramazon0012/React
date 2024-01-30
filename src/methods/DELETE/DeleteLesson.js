import React, { useState, useEffect } from "react";
import axios from "axios";

function DeleteLesson ()  {
  const [post, setPost] = useState(null)
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/post/1/")
      .then((response) => {
        setPost(response.data);
        console.log(response);
      })
  }, [])
  function delPost() {
    axios.delete("http://127.0.0.1:8000/post/1/")
        .then(() => {
            alert("Post deleted")
            setPost(null)
        })
  }

  if (!post) return "No post"
  return (<div>
    <h1>{post.name}</h1>
    <p>{post.slug}</p>
    <button onClick={delPost}>Delete post</button>
  </div>);
};

export default DeleteLesson;

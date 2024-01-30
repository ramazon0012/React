import React, { useEffect, useState } from "react";
import axios from "axios";

const PostLesson = () => {
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/posts/")
      .then((response) => {
        setPost(response.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  function createPost() {
    axios
      .post("http://127.0.0.1:8000/posts/", {
        name: "Salom salom",
        slug: "5_post",
        number: 78451252,
      })
      .then((response) => {
        setPost(response.data);
        console.log(response);
      });
  }
  if (!post) return "Loading...";

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.slug}</p>
      <h3>{post.number}</h3>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
};

export default PostLesson;

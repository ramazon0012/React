import React, { useEffect, useState } from "react";
import axios from "axios";

const GetLesson = () => {
  const [posts, setUsers] = useState([null]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/posts/")
      .then((res) => {
        setUsers(res.data);
        console.log(res);
      })
      .catch((e) => {
        console.error("Error!");
      });
  }, []);
  return (
    <div>
        {posts.map(post => (
            <h1>{post.name}</h1>
        ))}
    </div>
  );
};

export default GetLesson;

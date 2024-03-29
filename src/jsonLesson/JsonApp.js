import React from "react";
import Users from './users.json';

const JsonApp = () => {
    return (
        <div>  
            {Users.map((post) => {
                return(
                    <div className="infos">
                        <h1>Ismi: {post.name}</h1>
                        <h2>Yoshi {post.age}</h2>
                        <h3>Tel raqam: {post.phone}</h3>
                        <p>{post.city}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default JsonApp;
import React from "react";
import Skeleton from "react-loading-skeleton";

const Joke = ({joke, loading, getjoke}) => {
    return (
        <div className="joke">
            {loading ? <Skeleton circle={true}  width={50} height={50}/> : <h1>Salom</h1>} 
            <h1>{loading ? <Skeleton /> : joke.title}</h1>
            <button onClick={getjoke}>Get joke</button>
        </div>
    )
}
export default Joke;
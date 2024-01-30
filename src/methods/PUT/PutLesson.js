import React, {useState, useEffect} from "react";
import axios from "axios";

const PutLesson = () => {

  const [updateAt, setUpdatedAt] = useState([null])

  useEffect(() => {
    axios.put("http://127.0.0.1:8000/post/4/")
        .then((response) => {
            setUpdatedAt(response.data.updateAt)
            console.log(response)
        })
  }, [])
  return (
    <div>
        <div className="card">
            <div className="header">
                Put request
            </div>
            <div className="body">
                Returned updated at : {updateAt}
            </div>
        </div>
    </div>
  );
};

export default PutLesson;

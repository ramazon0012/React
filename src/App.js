import React from "react";
// import PostLesson from "./methods/POST/PostLesson";
// import GetLesson from "./methods/GET/GetLesson";
// import PutLesson from "./methods/PUT/PutLesson";
// import DeleteLesson from "./methods/DELETE/DeleteLesson"
// import { Context } from "./contextTut/Context";
// import Display from "./Display";
// import LocalSt from "./localStorage/LocalSt";
import Main from "./WebApplication/Main";
// import Joke from "./skeletonTut/Joke";
// import './skeletonTut/style.css'

function App() {

  // const [joke, setJoke] = useState({})
  // const [loading, setLoading] = useState(false)

  // const getjoke = () =>  {
  //   setLoading(true)
  //   fetch("http://127.0.0.1:8000/posts/")
  //     .then(response => response.json())
  //     .then(data => {
  //       const {name, slug} = data;
  //       setJoke({name, slug})
  //       setLoading(false)
  //       console.log(data)
  //     })

  // }

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     getjoke()
  //   }, 7000)
  //   return () => clearTimeout(timer)
  // }, [])
  // const personName = "Ramazon Ergashev"
  return (
    <>
      {/* <PostLesson /> */}
      {/* <GetLesson /> */}
      {/* <PutLesson /> */}
      {/* <DeleteLesson />
      <Joke joke={joke} loading={loading} getjoke={getjoke} /> */}
      {/* <Context.Provider value={personName}>
        <Display />
      </Context.Provider> */}
      {/* <LocalSt /> */}
      <Main />
    </>
  );
}

export default App;

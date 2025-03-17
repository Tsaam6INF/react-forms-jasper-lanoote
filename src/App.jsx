import { useState, useEffect } from "react";

import axiox from "axios";

import "./App.css";

import GetData from "./components/GetData";
import Posts from "./components/Posts";
import Put from "./components/Put";

const apiEndPoint = "https://api-o0p6.onrender.com/api/user";

function App() {
  const [posts, setPosts] = useState([{ title: "hallo hier" }]);

  useEffect(() => {
    axiox.get(apiEndPoint).then(({ data }) => setPosts(data.data));
  }, []);

  return (
    <>
      <Posts />
      <Put />
      <GetData posts={posts} />
    </>
  );
}

export default App;

import { useState, useEffect } from "react";

import axiox from "axios";

import "./App.css";

import GetData from "./components/GetData";
import Posts from "./components/Posts";

const apiEndPoint = "https://api-o0p6.onrender.com/api/user";

function App() {
  const [posts, setPosts] = useState([{ title: "hallo hier" }]);

  useEffect(() => {
    axiox.get(apiEndPoint).then(({ data }) => setPosts(data.data));
  }, []);

  const handleAdd = () => {
    const obj = {
      first_name: "werkt",
      last_name: "dit",
      login: "of",
      password: "niet",
    };

    axiox.post(apiEndPoint, obj).then(({ data }) => setPosts([...posts, data]));
  };

  return (
    <>
      <Posts />
      <GetData posts={posts} />
    </>
  );
}

export default App;

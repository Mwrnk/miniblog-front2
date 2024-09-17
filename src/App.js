import React from "react";
import { Header } from './Components/Header';
import { Banner } from './Components/Banner';
import { Inputs } from "./Components/PostForm";
import { Posts } from "./Components/Post";

function App() {
  return(
  <div>
    <Header></Header>
    <Banner></Banner>
    <Inputs></Inputs>
   {/* <Posts></Posts> */}
  </div>
  )
}

export default App;

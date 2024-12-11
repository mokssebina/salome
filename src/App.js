import React, {Fragment} from "react";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Description from "./Components/Description";
import Email from "./Components/Email";
import image from './Assets/Birthday-01.png'

function App() {
  return (
    <Fragment className="overscroll-none bg-red-300">
      <div className="w-screen h-screen bg-cover bg-center bg-[url('./Assets/Birthday-01.png')] overscroll-none border-none"></div>
      <div className="w-screen h-screen bg-[#cee5f0] overscroll-none border-none"></div>
    </Fragment>
  );
}

export default App;

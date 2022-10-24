import { useState, useEffect } from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Init from "./components/Init";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Loader from "./components/Loader"

function App() {
  const [loader, setLoader] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false)
    }, 4000)
  },[])

  if (loader){
    return (<Loader/>)
  }

  return (
    <div>
      <Main>
        <div className="center">
          <div className="content center">
            <div>
              <Init/>
              <About/>
              <Tech/>
              <Projects/>
              <Contact/>
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
}

export default App;

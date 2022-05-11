import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/auth-context";
// import { Counter } from "./components/Counter";
// import { Log } from "./components/Log";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const [switcher,setSwitcher] = useState(false)

  // const onSwitch = ()=>{
  //   setSwitcher()
  // }

  useEffect(() => {
    const storedUserLoggedInfo = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = async (email, password) => {
    localStorage.setItem("isLoggedIn", "1"); //1- tipa true
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    // <div>
     
      // {/* <Counter /> */}
      // {/* <Log /> */}
    // {/* </div> */}

    <React.Fragment>
      <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler}}>
         <MainHeader  />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
     
    </React.Fragment>
  );
}

export default App;

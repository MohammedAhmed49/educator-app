import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout.component";
import Home from "./pages/home/home.component";
import SignIn from "./pages/sign-in/sign-in.component";
import SignUp from "./pages/sign-up/sign-up.component";
import { onAuthStateChangedListener } from "./utils/firebase/firebase.utils";

function App() {
  const [userAuth, setUserAuth] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      setUserAuth(user);
    });
    
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout user={userAuth} />}>
        <Route path='*' element={<p className="container mx-auto">Not Found</p>} />
        <Route path="/" element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;

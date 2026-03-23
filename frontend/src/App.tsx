import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SignupPage } from "../src/pages/signupPage";
import SigninPage from "../src/pages/signinPage";
import HomePage from "./pages/homePage";
import OAuthSuccess from "./pages/oAuthSuccessPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/oauth-success" element={<OAuthSuccess />} />
      </Routes>
    </>
  );
}

export default App;

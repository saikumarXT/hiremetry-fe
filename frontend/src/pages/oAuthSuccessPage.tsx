import { useEffect } from "react";

function OAuthSuccess() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      window.location.href = "/";
    } else {
      window.location.href = "/login";
    }
  }, []);

  return <p className="m-15">Logging you in...</p>;
}

export default OAuthSuccess;

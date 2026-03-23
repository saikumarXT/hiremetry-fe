import InputComponents from "../components/input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";

function SigninPage() {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function signin() {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    console.log(email, password);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        {
          email: email,
          password: password,
        },
      );

      const token = response.data.token;
      if (token) {
        localStorage.setItem("token", token);
        alert("login successfully completed");
        navigate("/");
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="flex flex-col justify-center px-20 bg-blue-600 text-white">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Welcome to Hiremetry
        </h1>
        <p className="text-lg text-blue-100 mb-8">
          The AI Interview Application that helps you prepare smarter, faster,
          and better. Experience real-time mock interviews powered by OpenAI,
          Gemini, and more.
        </p>

        <div className="space-y-4 text-blue-100">
          <p>✔ Practice role-based interview questions</p>
          <p>✔ Get instant AI feedback</p>
          <p>✔ Improve confidence with real simulations</p>
          <p>✔ Crack your dream job interviews</p>
        </div>
      </div>

      <div className="flex items-center justify-center bg-gray-50">
        <div className="bg-white p-12 rounded-xl shadow-lg w-[480px]">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Login Account
          </h2>

          <div className="space-y-4">
            <InputComponents
              reference={emailRef}
              placeholder="Enter your email"
              width="lg"
              height="sm"
            />

            <InputComponents
              reference={passwordRef}
              placeholder="Enter your password"
              width="lg"
              height="sm"
            />

            <button
              onClick={signin}
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Signin
            </button>
          </div>

          <div className="flex items-center gap-2 my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="text-sm text-gray-500">OR</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="space-y-4 mt-6">
            <div>
              <a href={`${import.meta.env.VITE_BACKEND_URL}/auth/google`}>
                <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </button>
              </a>
            </div>
            <div>
              <a href={`${import.meta.env.VITE_BACKEND_URL}/auth/github`}>
                <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                    className="w-5 h-5"
                  />
                  Continue with GitHub
                </button>
              </a>
            </div>
            <div>
              <a href={`${import.meta.env.VITE_BACKEND_URL}/auth/linkedin`}>
                <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    className="w-5 h-5"
                  />
                  Continue with LinkedIn
                </button>
              </a>
            </div>
          </div>

          <div className="text-center mt-6 text-sm">
            <span className="text-gray-600">Already have an account?</span>
            <button
              className="ml-2 text-blue-600 font-semibold hover:underline"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;

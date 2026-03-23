import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between px-10 h-16 shadow-md bg-white sticky top-0 z-50">
      <div
        className="text-2xl font-bold text-blue-600 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <p>Hiremetry</p>
      </div>

      <nav className="flex gap-8 text-gray-700 font-medium">
        <p
          className="cursor-pointer hover:text-blue-600 font-bold transition text-lg hover:underline underline-offset-8 "
          onClick={() => navigate("/")}
        >
          Home
        </p>
        <p
          className="cursor-pointer hover:text-blue-600 font-bold transition text-lg hover:underline underline-offset-8"
          onClick={() => navigate("/interview")}
        >
          Interview
        </p>
        <p
          className="cursor-pointer hover:text-blue-600  font-bold transition text-lg hover:underline underline-offset-8"
          onClick={() => navigate("/test-series")}
        >
          Test Series
        </p>
        <p
          className="cursor-pointer hover:text-blue-600 font-bold transition text-lg hover:underline underline-offset-8"
          onClick={() => navigate("/courses")}
        >
          Courses
        </p>
      </nav>

      <button
        onClick={() => navigate("/signin")}
        className="bg-blue-600 text-white px-5 py-2 font-bold  rounded-lg hover:bg-blue-700 transition shadow-sm"
      >
        Sign In
      </button>
    </header>
  );
};

export default Header;

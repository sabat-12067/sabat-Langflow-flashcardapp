import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin/SignIn";
import Class from "./pages/authenticated/class/components/Class";
import Set from "./pages/authenticated/class/set/Set";
import { useSelector } from "react-redux";
import Cards from "./pages/authenticated/home/Cards";
import AuthPage from "./pages/signin/components/AuthPage";

const App = () => {
  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);

  return (
    <div className={isDarkMode ? "bg-white h-[100%]" : "bg-[#090c19] h-[100vh]"}>
    <Router>
        <Routes>
          <Route path="class/:classId" element={<Class />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="class/:classId/:setId" element={<Set />} />
        </Routes>
    </Router>
    </div>

  );
};

export default App;

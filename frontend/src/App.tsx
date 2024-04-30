import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./pages/authenticated/classrooms/Cards";
import SignIn from "./pages/signin/SignIn";
import Class from "./pages/authenticated/class/components/Class";
import Set from "./pages/authenticated/class/set/Set";
import { useSelector } from "react-redux";

const App = () => {
  const isDarkMode = useSelector((content: any) => content.theme.isDarkMode);

  return (
    <div className={isDarkMode ? "bg-white h-[100%]" : "bg-black h-[100vh]"}>
    <Router>
        <Routes>
          <Route path="class/:classId" element={<Class />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="class/:classId/:setId" element={<Set />} />
        </Routes>
    </Router>
    </div>

  );
};

export default App;

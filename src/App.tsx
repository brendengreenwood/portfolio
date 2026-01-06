import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import AIPrototypes from "./components/AIPrototypes";
import FeaturedWork from "./components/FeaturedWork";
import MyStack from "./components/MyStack";
import Resume from "./components/Resume";
import CaseStudy from "./pages/CaseStudy";
import PatternCreate from "./pages/PatternCreate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/case-study/pattern-create" element={<PatternCreate />} />
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white">
              <Hero />
              <Navigation />
              <div className="py-16 md:py-20 pb-24 md:pb-32">
                <div id="case-studies" className="mb-20 md:mb-24">
                  <FeaturedWork />
                </div>
                <div className="border-t border-gray-300 mb-20 md:mb-24"></div>

                <div id="prototypes" className="mb-20 md:mb-24">
                  <AIPrototypes />
                </div>
                <div className="border-t border-gray-300 mb-20 md:mb-24"></div>

                <div id="tools" className="mb-20 md:mb-24">
                  <MyStack />
                </div>
                <div className="border-t border-gray-300 mb-20 md:mb-24"></div>

                <div id="resume">
                  <Resume />
                </div>
              </div>
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

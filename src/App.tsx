import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Hero from "./components/Hero";
import AIPrototypes from "./components/AIPrototypes";
import FeaturedWork from "./components/FeaturedWork";
import MyStack from "./components/MyStack";
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
            <div className="min-h-screen bg-gray-50">
              <Hero />
              <div className="flex flex-col gap-24 md:gap-32 pb-32 md:pb-48">
                <FeaturedWork />
                <AIPrototypes />
                <MyStack />
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

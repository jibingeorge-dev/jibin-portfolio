import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { revealElements } from "./utils/scrollReveal";

import Home from "./components/Home";
import Certifications from "./components/Certifications";

function App() {

  useEffect(() => {
    window.addEventListener('scroll', revealElements)

    revealElements()

    return () => {
      window.removeEventListener('scroll', revealElements)
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/certifications"
          element={<Certifications />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
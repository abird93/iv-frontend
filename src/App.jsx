import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Home from "./pages/Home";
import CompanyAnalysis from "./pages/CompanyAnalysis";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function App() {
  return (
    <AppContainer>
      {/* Header */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company-analysis" element={<CompanyAnalysis />} />
        </Routes>
      </BrowserRouter>
      {/* Footer */}
    </AppContainer>
  );
}

export default App;

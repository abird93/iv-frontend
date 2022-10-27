import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import CompanyAnalysis from './pages/CompanyAnalysis';
import Companyoverview from './pages/CompanyOverview';
import FiancialAnalysisResult from './pages/FinancialAnalysisResults';
import { Path } from './constants';
import NavBar12 from './component/Navbar1';
import Sidebar from './component/Sidebar1';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function App() {
  return (
    <AppContainer>
      {/* Header  */}

      <BrowserRouter>
        <NavBar12 />
        <Sidebar />
        <Routes>
          <Route path={Path.home} element={<Home />} />
          <Route path={Path.companyAnalysis} element={<CompanyAnalysis />} />
          <Route path={Path.companyoverview} element={<Companyoverview />} />
          <Route path={Path.financialAnalysisresult} element={<FiancialAnalysisResult />} />
        </Routes>
      </BrowserRouter>

      {/* Footer */}
    </AppContainer>
  );
}

export default App;

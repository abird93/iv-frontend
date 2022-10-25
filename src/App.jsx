import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './component/NavBar';
import Home from './pages/Home';
import CompanyAnalysis from './pages/CompanyAnalysis';
import Companyoverview from './pages/CompanyOverview';
import FiancialAnalysisResult from './pages/FinancialAnalysisResults';
import { Path } from './constants';

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
        <Sidebar>
          <Routes>
            <Route path={Path.home} element={<Home />} />
            <Route path={Path.companyAnalysis} element={<CompanyAnalysis />} />
            <Route path={Path.companyoverview} element={<Companyoverview />} />
            <Route path={Path.financialAnalysisresult} element={<FiancialAnalysisResult />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>

      {/* Footer */}
    </AppContainer>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import CompanyAnalysis from './pages/CompanyAnalysis';
import { Path } from './constants';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function App() {
  return (
    <AppContainer>
      {/* Header 123 */}
      <BrowserRouter>
        <Routes>
          <Route path={Path.home} element={<Home />} />
          <Route path={Path.companyAnalysis} element={<CompanyAnalysis />} />
        </Routes>
      </BrowserRouter>
      {/* Footer */}
    </AppContainer>
  );
}

export default App;

import React from 'react';
import axios from 'axios';
import { CompanyAnalysisContainer } from './styles';

function CompanyAnalysis() {
  const getPosts = () => {
    axios.get(
      'http://localhost:3001/posts'.then((res) => {
        console.log(res);
      }),
    );
  };
  getPosts();

  return <CompanyAnalysisContainer>Company Analysis</CompanyAnalysisContainer>;
}

export default CompanyAnalysis;

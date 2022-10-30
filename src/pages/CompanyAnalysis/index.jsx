import React from 'react';
import BarChartcompany from '../../component/BarChart/BarChart';
import {
  HomeContainer,
  Title,
  Text1area,
  Text2area,
  Img1area,
  Text3area,
  Img2area,
  Text1,
  Text2,
  Text3,
  Text4,
  Img3area,
  Text5,
  Barchartarea,
} from './styles';

function CompanyAnalysis() {
  function Colorfulblue({ children }) {
    return <span style={{ color: '#466EB6' }}>{children}</span>;
  }
  function Colorfulred({ children }) {
    return <span style={{ color: '#EF5350' }}>{children}</span>;
  }
  return (
    <HomeContainer>
      <Title>일동홀딩스를 분석해 봤어요</Title>
      <Text1area>
        <Img2area>
          <img className='inveset-result' alt='pngwing' src='img/pngwing.svg' />
        </Img2area>

        <Text1>투자를 권고하고 싶지 않아요</Text1>
      </Text1area>
      <Text2area>
        <Img3area>
          <img className='catuion-mark' alt='pngegg' src='img/catuionicon.png' />
        </Img3area>
        <Text2>분식위험</Text2>
        <Text3>재무제표를 완전히 신뢰할 수 없어요</Text3>
      </Text2area>
      <Text3area>
        <Text4>
          <Colorfulred>I</Colorfulred>
          <Colorfulblue>V</Colorfulblue> 분석 결과
        </Text4>
        <Text5>일동홀딩스 생존확률</Text5>
        <Barchartarea>
          <BarChartcompany></BarChartcompany>
        </Barchartarea>
      </Text3area>
    </HomeContainer>
  );
}
export default CompanyAnalysis;

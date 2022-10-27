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
        <Text2>투자주의</Text2>
        <Text3>투기적이거나 불공정거래와 관련된 회사일 수 있어요</Text3>
      </Text2area>
      <Text3area>
        <Text4>AI 분석 결과</Text4>
        <Text5>일동홀딩스 생존확률</Text5>
        <Barchartarea>
          <BarChartcompany></BarChartcompany>
        </Barchartarea>
      </Text3area>
    </HomeContainer>
  );
}
export default CompanyAnalysis;

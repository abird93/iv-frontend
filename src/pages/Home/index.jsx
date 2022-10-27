import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Path } from '../../constants';

import {
  HomeContainer,
  HomeFlexArea,
  Input,
  InputArea,
  SearchIcon,
  SearchInputArea,
  // SearchIcon,
  Subtitle,
  Title,
} from './styles';

function Home() {
  function Colorfulblue({ children }) {
    return <span style={{ color: '#466EB6' }}>{children}</span>;
  }
  function Colorfulred({ children }) {
    return <span style={{ color: '#EF5350' }}>{children}</span>;
  }
  const navigate = useNavigate();

  const [searchKey, setSearchKey] = useState('');

  const onInputChange = useCallback((event) => {
    setSearchKey(event.target.value);
  }, []);

  const onSearchButtonClick = useCallback(() => {
    navigate(`${Path.companyAnalysis}?search=${searchKey}`);
  }, [searchKey, navigate]);

  const handleOnClick = () => {
    navigate('/company-analysis');
  };
  // 버튼에 적용할 클릭 이벤트 함수

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleOnClick(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };
  return (
    <HomeContainer>
      <HomeFlexArea>
        <Title>
          <Colorfulred>I</Colorfulred>ee<Colorfulblue>V</Colorfulblue>ee
        </Title>
        <SearchInputArea>
          <InputArea>
            <Input
              placeholder='기업명을 입력해주세요.'
              onChange={onInputChange}
              onKeyPress={handleOnKeyPress}
            />
            <SearchIcon>
              <img className='searchicon' alt='search' src='/img/vector.svg' />
            </SearchIcon>
          </InputArea>
          {/*<SearchButton onClick={onSearchButtonClick}>검색</SearchButton>*/}
        </SearchInputArea>
        <Subtitle>인공지능 기업분석 플랫폼</Subtitle>
      </HomeFlexArea>
    </HomeContainer>
  );
}

export default Home;

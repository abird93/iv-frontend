import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Path } from '../../constants';

import {
  HomeContainer,
  HomeFlexArea,
  Input,
  InputArea,
  SearchButton,
  SearchInputArea,
  // SearchIcon,
  Subtitle,
  Title,
} from './styles';

function Home() {
  const navigate = useNavigate();

  const [searchKey, setSearchKey] = useState('');

  const onInputChange = useCallback((event) => {
    setSearchKey(event.target.value);
  }, []);

  const onSearchButtonClick = useCallback(() => {
    navigate(`${Path.companyAnalysis}?search=${searchKey}`);
  }, [searchKey, navigate]);

  console.log('hi');

  return (
    <HomeContainer>
      <HomeFlexArea>
        <Title>IeeVee</Title>
        <SearchInputArea>
          <InputArea>
            <Input placeholder='기업명을 입력해주세요.' onChange={onInputChange} />
            {/* <SearchIcon /> */}
          </InputArea>
          <SearchButton onClick={onSearchButtonClick}>검색</SearchButton>
        </SearchInputArea>
        <Subtitle>인공지능 기업분석 플랫폼</Subtitle>
      </HomeFlexArea>
    </HomeContainer>
  );
}

export default Home;

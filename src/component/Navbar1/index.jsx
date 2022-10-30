import React, { useCallback, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { NavbarContainer1, Text1, SearchIcon, Input, InputArea } from './styles.js';

function NavBar12() {
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

  const handleOnClick = () => {
    navigate('/company-analysis');
  };
  // 버튼에 적용할 클릭 이벤트 함수
  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleOnClick(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };
  const location = useLocation();
  console.log(location.pathname);
  if (window.location.pathname === '/') {
    return null;
  }
  return (
    <NavbarContainer1>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Text1>
          <Colorfulred>I</Colorfulred>ee<Colorfulblue>V</Colorfulblue>ee{' '}
        </Text1>
      </Link>

      <Input
        placeholder='기업명을 입력해주세요.'
        onChange={onInputChange}
        onKeyPress={handleOnKeyPress}
      />
      <SearchIcon>
        <img className='searchicon' alt='search' src='/img/vector.svg' />
      </SearchIcon>
    </NavbarContainer1>
  );
}
export default NavBar12;

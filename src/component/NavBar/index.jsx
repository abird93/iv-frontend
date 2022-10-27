import React, { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavbarContainer1, Text1, SearchIcon, Input, InputArea } from './styles.js';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: '/company-anlysis',
      name: '결과',
      icon: <FaTh />,
    },
    {
      path: '/companyoverview',
      name: '기업개요',
      icon: <FaTh />,
    },
    {
      path: '/FinancialAnalysisResults',
      name: '재무분석',
      icon: <FaUserAlt />,
    },
  ];
const NavBar = () => {
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
      <Text1>Invsetment Vaccine</Text1>

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
};
export default NavBar;

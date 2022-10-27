import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Sidebararea, SidebarContainer1, Text1 } from './styles';

const Sidebar = ({}) => {
  const location = useLocation();
  console.log(location.pathname);
  if (window.location.pathname === '/') {
    return null;
  }

  const menuItem = [
    {
      path: '/company-analysis',
      name: '결과',
    },
    {
      path: '/companyoverview',
      name: '기업 개요',
    },
    {
      path: '/fiancial',
      name: '재무 분석',
    },
    {
      path: '/fiancial',
      name: '산업 분석',
    },
    {
      path: '/fiancial',
      name: '거시 분석',
    },
  ];

  return (
    <SidebarContainer1>
      <Sidebararea>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} style={{ textDecoration: 'none' }}>
            <Text1>{item.name}</Text1>
          </NavLink>
        ))}
      </Sidebararea>
    </SidebarContainer1>
  );
};

export default Sidebar;

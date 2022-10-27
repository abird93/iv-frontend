import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Sidebararea, SidebarContainer1, Text1 } from './styles';
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from 'react-icons/fa';

const Sidebar = ({ children }) => {
  const location = useLocation();
  console.log(location.pathname);
  if (window.location.pathname === '/') {
    return null;
  }

  const menuItem = [
    {
      path: '/company-analysis',
      name: '결과',
      icon: <FaTh />,
    },
    {
      path: '/companyoverview',
      name: '기업개요',
      icon: <FaUserAlt />,
    },
    {
      path: '/analytics',
      name: 'fiancial',
      icon: <FaRegChartBar />,
    },
  ];

  return (
    <SidebarContainer1>
      <Sidebararea>
        <main>{children}</main>
      </Sidebararea>
    </SidebarContainer1>
  );
};

export default Sidebar;

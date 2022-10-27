import styled from 'styled-components';

export const NavbarContainer1 = styled.div`
  font-family: 'SpoqaHanSansNeo-Regular';
  height: 60px;
  box-sizing: border-box;
  background-color: #fff;
`;

export const Text1 = styled.div`
  font-size: 24px;
  line-height: 44px;
  /* or 183% */
  margin-left: 20px;
  margin-top: 10px;
  display: flex;
  align-items: center;

  color: #4b49ac;
`;

export const Input = styled.input`
  position: absolute;
  width: 600px;
  height: 50px;
  top: 5px;
  left: 600px;
  font-weight: 600;
  color: #000000;
  font-size: 20px;
  padding: 1rem 3.625rem 1rem 0.75rem;
  box-sizing: border-box;
  border: 1px solid #e4dfdf;
  background-color: #f0f3f4;
  border-radius: 10px;
  padding-left: 50px;

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 1.25rem;
  left: 614px;
  width: 2rem;
  height: 2rem;
`;

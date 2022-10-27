import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const HomeFlexArea = styled.div`
  display: flex;
  width: 63.875rem;
  flex-direction: column;
  margin-bottom: 12rem;
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 400;
  font-size: 7.5rem;
  line-height: 9rem;
  color: #7978e9;
  font-family: 'SpoqaHanSansNeo-Regular';
`;

export const SearchInputArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const InputArea = styled.div`
  position: relative;
  width: 80%;
  margin-top: 40px;
`;

export const Input = styled.input`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  font-weight: 1200;
  color: #000000;
  font-size: 20px;
  padding: 1rem 3.625rem 1rem 0.75rem;
  box-sizing: border-box;
  border: 1px solid #e4dfdf;
  border-radius: 3.125rem;
  padding-left: 50px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 2rem;
  height: 2rem;
`;

export const Subtitle = styled.div`
  position: relative;
  top: 100px;
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: #424242;
  text-align: center;
  font-family: 'SpoqaHanSansNeo-Regular';
`;

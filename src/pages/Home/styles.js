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
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 400;
  font-size: 7.5rem;
  line-height: 9rem;
  color: #7978e9;
`;

export const SearchInputArea = styled.div`
  display: flex;
  width: 100%;
  margin-top: 4.5rem;
  justify-content: space-between;
`;

export const InputArea = styled.div`
  position: relative;
  width: 50.375rem;
`;

export const Input = styled.input`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  font-weight: 400;
  color: #000000;
  padding: 1rem 3.625rem 1rem 0.75rem;
  box-sizing: border-box;
  border: 1px solid #e4dfdf;
  border-radius: 3.125rem;

  &:focus {
    outline: none;
  }
`;

// export const SearchIcon = styled.image({ src: searchIcon })`
//   position: absolute;
//   top: 1rem;
//   right: 0.75rem;
//   width: 2rem;
//   height: 2rem;
// `;

export const SearchButton = styled.div`
  width: 10rem;
  padding: 0.875rem 0;
  text-align: center;
  background-color: #4b49ac;
  font-weight: 700;
  color: #ffffff;
  border-radius: 0.25rem;
`;

export const Subtitle = styled.div`
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: #424242;
  margin: 1.5rem 0 0 31.5rem;
`;

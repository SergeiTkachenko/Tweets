import styled from 'styled-components';

export const BackButton = styled.button`
  padding: 14px 28px;
  margin: 12px auto 12px auto;
  width: 196px;
  height: 50px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  text-transform: uppercase;
  cursor: pointer;

  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1), 0.3s;

  &:hover,
  &:focus {
    box-shadow: rgba(54, 26, 121, 0.25) 0px 10px 20px 10px,
      rgba(34, 5, 102, 0.3) 0px 10px 7px -2px;
  }

  &:active {
    color: white;
    background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
  }
`;

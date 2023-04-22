import styled from 'styled-components';

export const UsersListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 36px;
`;

export const SeleectStyled = styled.select`
  padding: 14px 28px;
  margin: 12px 5px 12px 5px;
  width: 196px;
  height: 50px;
  background: #ebd8ff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  align-items: center;
  justify-content: center;

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
    background: linear-gradient(115deg, #471ca9 -1%, #5736a3 54%, #4b2a99 79%);
  }
`;

export const SeleectOptionStyled = styled.option`
  font-size: 16px;
`;
